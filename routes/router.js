const { conn, syncAndSeed, models: { Book_mark } } = require('../db');
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try{
        const bookmarks = await Book_mark.findAll();
        const mapped = bookmarks.reduce((acc, bookmark)=>{
            const key = bookmark.category;
            acc[key] = acc[key] || [];
            acc[key].push(bookmark);
            return acc;
        }, {});
        res.send(`
            <html>
                <head>
                </head>
                <body>
                    <h1>Bookmarker</h1>
                    <div>
                        <ul>
                        ${
                            Object.entries(mapped).map( entry => { 
                            const category = entry[0]; 
                            const bookmark = entry[1]; 
                            return `
                            <li>${ category }</li>
                            `;
                            }).join('')
                        }
                        </ul>
                    </div>
                </body>
            </html>
        `)
    }catch (error) { next(error) }
});

module.exports = router;