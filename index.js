var nj = require("nunjucks");
var _ = require("lodash");

var fs = require("fs");
var path = require("path");

module.exports = {
    blocks: {
        itemplate: {
            parse: false,
           // blocks: ["any"],
            process: function(blk) {
                var vars = {};
                var blocks = {};
                
               /* _.each(blk.blocks, function(_blk) {
                    blocks[_blk.name] = _blk.body;
                });

                blocks['default'] = blk.body;
                blk.args;
                blk.kargs;
                return nj.render("file", {
                    blocks: blocks,
                    args: blk.args,
                    kargs: blk.kargs
                })*/
                return blk.toString();

            }
        }
    }

}