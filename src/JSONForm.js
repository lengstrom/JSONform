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
        var container = document.createElement('div');
        var defaults = {
            "label": "",
            "placeholder": "",
            "inputsize": "",
            "required": true,
            "helptext": "",
            "buttontype": "",
            "buttonlabel": "",
            "prepend": "",
        };

        _.defaults(rowSource, defaults);

        var HTMLString =  (_.template(components[rowSource["type"]]))(rowSource);
        container.innerHTML = HTMLString;
        return container;
    }
}
