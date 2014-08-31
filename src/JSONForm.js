function JSONForm(input) {
    this.init = function(input, opts) {
        this.sourceObject = input;
        this.classes = opts.classes || {}; 
    }
    
    this.render = function() {
        var mainNode = document.createElement('div');
        for (var i = 0; i < this.sourceObject.length; i++) {
            mainNode.appendChild(this.processRow(this.sourceObject[i]));
        }
        
        return mainNode;
    }
    
    this.processRow = function(rowSource) {
        return this.fillTemplate(templates[rowSource["type"]], rowSource);
    }

    this.fillTemplate = function(template, data) {
        var filledTemplate = "";
        var prevIndex = 0;
        var index = template.indexOf("%");

        while(index != -1) {
            filledTemplate += template.substring(prevIndex, index); 
            prevIndex = index + 1;
            index = template.indexOf("%", prevIndex);
            
            var label = template.substring(prevIndex, index);
            filledTemplate += data[label] || ""; // empty string if no matching label. should this throw an error?
            
            prevIndex = index + 1;
            index = template.indexOf("%", prevIndex);
        }
        filledTemplate += template.substring(prevIndex, template.length); 
        return filledTemplate;
    }
}
