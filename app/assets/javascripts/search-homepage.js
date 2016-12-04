/*
$( document ).ready(function() {
    var demo = new Vue({
        el: '#main',
        data: {
            searchString: ""
        },
        computed: {
            filteredArticles: function () {
                var articles_array = json_array,
                    searchString = this.searchString;
    
                if(!searchString){
                    return articles_array;
                }
    
                searchString = searchString.trim().toLowerCase();
    
                articles_array = articles_array.filter(function(item){
                    if(item.title.toLowerCase().indexOf(searchString) !== -1){
                        return item;
                    }
                })
                return articles_array;;
            }
        }
    });

});

*/