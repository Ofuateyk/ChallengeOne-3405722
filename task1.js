class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
      return null; 
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
      return null; 
    }
  
    search(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  
    startsWith(prefix) {
      let node = this.root;
      for (const char of prefix) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  }
  
  const output = [];
  const trie = new Trie(); 
  output.push(null); git
  
  trie.insert("apple");
  output.push(null); 
  output.push(trie.search("apple"));   
  output.push(trie.search("app"));     
  output.push(trie.startsWith("app")); 
  
  trie.insert("app");
  output.push(null);
  
  output.push(trie.search("app"));    
  
  console.log(output);