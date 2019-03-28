const fs = require ('fs');
const path = require ('path');
const showdown = require ('showdown');
const converter = new showdown.Converter();

fs.readdir('./markdown', (err, files)=>{
    if(err) console.log(err)
    let markdownFiles = files

    markdownFiles.forEach(file => {
        fs.readFile('./markdown/' + file, (err, data) => {
            if(err) console.log(err)
            let markdownData = data.toString();
            let newHtml = converter.makeHtml(markdownData);
            let htmlFileName = file.replace(".md", ".html");
            
            fs.readFile('./layout/layout.html', (err,data) => {
                if (err) console.log(err);
                let htmlLayout = data.toString();
                console.log(htmlLayout);

                let newHTMLLayout = htmlLayout.replace('<!-- ##HTML## -->', newHtml);

                fs.writeFile('./html/' + htmlFileName, newHTMLLayout, (err) => {
                if (err) console.log(err);
                });
            });
        });
    });
});