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
    stratWith(prefix) {
        let node = this.root;
        for(const char of prefix) {
            if (!node.child[char]) {
                return false
            }
            node = node.child[char]
        }
        return true
    }
}

const t1 = new Trie()

t1.insert('irshad')
t1.insert('cat')
console.log(t1.stratWith('f'));
console.log(t1.stratWith('irs'));
console.log(t1.search('irshad'));
console.log(t1.search('ir'));
