function JSONForm() {
    this.init = function(input, opts) {
        this.sourceObject = input;
    }
    
    this.render = function() {
        var mainNode = document.createElement('div');
        for (var i = 0; i < this.sourceObject.length; i++) {
            mainNode.appendChild(this.processRow(this.sourceObject[i]));
        }
        
        return mainNode;
    }
    
    this.processRow = function(rowSource) {
        var compiled =  _.template(components[rowSource["type"]]);
        return compiled(rowSource); 
    }
}
