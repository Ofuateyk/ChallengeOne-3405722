class SearchSuggestionSystem {
    constructor(products) {
      this.products = products.sort(); // Sort products lexicographically
    }
  
    getSuggestions(searchWord) {
      const result = [];
      let prefix = '';
  
      for (const char of searchWord) {
        prefix += char;
        const suggestions = [];
  
        for (const product of this.products) {
          if (product.startsWith(prefix)) {
            suggestions.push(product);
            if (suggestions.length === 3) break;
          }
        }
  
        result.push(suggestions);
      }
  
      return result;
    }
  }
  