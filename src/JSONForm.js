function JSONForm(input) {
    this.plugins = {
        "text": 
        "textbox":
        "radio": 
        "submit":
    };

    this.init = function(input, opts) {
        this.sourceObject = input;
        this.classes = opts.classes || {/*bootstrap classes*/}; 
    }
    
    this.render = function() {
        var mainNode = document.createElement('div');
        for (var i = 0; i < this.sourceObject.length; i++) {
            mainNode.appendChild(this.processRow(this.sourceObject[i]));
        }
        
        return mainNode;
    }
    
    this.processRow = function(rowSource) {
        return this.plugins[rowSource.type](rowSource);
    }
}
