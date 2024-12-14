class TrieNode {
    constructor(){
        this.child = {}
        this.endOfWord = false
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode()
    }
    insert(word) {
        let node = this.root;
        for(const char of word ) {
            if( !node.child[char]) {
                node.child[char] = new TrieNode()
            }
            node = node.child[char]
        }
        node.endOfWord = true
    }
    search(word) {
        let node = this.root;
        for(const char of word) {
            if (!node.child[char]) {
                return false
            }
            node = node.child[char]
        }
        return node.endOfWord
    }
    stratsWith(prefix) {
        let node = this.root;
        for(const char of prefix) {
            if (!node.child[char]) {
                return false
            }
            node = node.child[char]
        }
        return true
    }
    findLargePrefix(word){
        let node = this.root;
        let prefix = '';
    
        for (let char of word) {
            if (node.child[char]) {
                prefix += char;
                node = node.child[char];
            } else {
                break;
            }
        }
        return prefix;
    }
    
}

const t1 = new Trie()

t1.insert('appleisgood')
t1.insert('appendies')
t1.insert('app')
t1.insert('appeil')
console.log(t1.findLargePrefix('app'));
  // returns 'app' (correct)
console.log(t1.findLargePrefix('applepie'));
  // returns 'apple'


