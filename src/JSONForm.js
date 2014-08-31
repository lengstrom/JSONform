function JSONForm() {
    this.init = function(input, opts) {
        this.sourceObject = input;
    }
    
    this.render = function() {
        var mainNode = document.createElement('div');
        debugger;
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

        };
        
        for(var key in defaults) {
            if(typeof rowSource[key] == "undefined") {
                rowSource[key] = defaults[key];
            }
        }

        var HTMLString =  (_.template(components[rowSource["type"]]))(rowSource);
        container.innerHTML = HTMLString;
        return container;
    }
}
