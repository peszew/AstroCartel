const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');

// 1. Load Customer Data
const customerData = JSON.parse(fs.readFileSync('./customer_data.json', 'utf8'));

// 2. Define Theme Paths
const themePaths = {
    'classic': '../',
    'cyberpunk': '../portfolio/cyberpunk/',
    'vaporwave': '../portfolio/vaporwave/'
};

const sourcePath = themePaths[customerData.theme] || themePaths['classic'];
const outputDir = `./output/${customerData.blogTitle.replace(/\s+/g, '_')}`;

async function generateSite() {
    console.log(`🚀 Generating site for: ${customerData.blogTitle} (${customerData.theme} theme)`);

    try {
        // Clear previous output
        if (fs.existsSync(outputDir)) fs.removeSync(outputDir);
        fs.ensureDirSync(outputDir);

        // Copy all files from the chosen theme
        // We only copy necessary files, avoiding the portfolio folder and generator folder
        const items = fs.readdirSync(sourcePath);
        for (const item of items) {
            if (item !== 'portfolio' && item !== 'generator' && item !== 'node_modules' && item !== '.git') {
                fs.copySync(path.join(sourcePath, item), path.join(outputDir, item));
            }
        }

        // Process HTML files for replacements
        const htmlFiles = getAllFiles(outputDir).filter(f => f.endsWith('.html'));
        
        for (const file of htmlFiles) {
            let content = fs.readFileSync(file, 'utf8');
            
            // Perform Replacements
            content = content.replace(/ASTROCARTEL/g, customerData.blogTitle.toUpperCase());
            content = content.replace(/AstroCartel/g, customerData.blogTitle);
            content = content.replace(/GUESTBOOK/g, `${customerData.blogTitle.toUpperCase()}'S GUESTBOOK`);
            content = content.replace(/★ Music Reviews ★ Vaporwave Vibes ★/g, customerData.tagline);
            content = content.replace(/Your late-night music guide through the vaporwave void. Album reviews, vibes, and 420-friendly beats. Enter the AstroCartel. 🎵✨/g, customerData.metaDescription);
            content = content.replace(/Made with ♥ by pe_szew/g, customerData.footerCredit);
            
            // About Me Replacement (for about.html specifically)
            if (file.endsWith('about.html')) {
                const aboutRegex = /Welcome to AstroCartel - a personal space[\s\S]*?if it's good music,\s+it belongs here\./g;
                content = content.replace(aboutRegex, customerData.aboutMe);
            }

            fs.writeFileSync(file, content);
        }

        console.log('✅ Customizations applied!');

        // Create the ZIP file
        const zipName = `${customerData.blogTitle.replace(/\s+/g, '_')}_Site.zip`;
        const zipPath = path.join('./output', zipName);
        const output = fs.createWriteStream(zipPath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => {
            console.log(`📦 Success! Created: ${zipName} (${archive.pointer()} total bytes)`);
            console.log(`👉 Deliver this ZIP to your customer!`);
        });

        archive.on('error', (err) => { throw err; });
        archive.pipe(output);
        archive.directory(outputDir, false);
        await archive.finalize();

    } catch (err) {
        console.error('❌ Error during generation:', err);
    }
}

// Helper to find all files recursively
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

// Start the process
generateSite();
