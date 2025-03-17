/**
 * ! Trie (Prefix Tree)
 * * A Trie is a tree-like data structure used for storing and retrieving strings efficiently.
 * * It is mainly used for prefix-based searching, like auto-suggestions, dictionaries, and IP routing.
 * * Unlike a Binary Search Tree (BST), it does not store keys directly in nodes but in paths.
 * 
 * ? Example: Autocomplete system, dictionary lookup, spell checker.
 * 
 * ! Features of a Trie:
 * 
 * * Root Node:
 * ? The starting point of the Trie, usually an empty node.
 * 
 * * Child Nodes:
 * ? Each node contains multiple child nodes representing different characters.
 * 
 * * Edge:
 * ? A connection between two nodes representing a character transition.
 * 
 * * End of Word Marker:
 * ? A boolean flag indicating whether a node marks the end of a word.
 * 
 * * Prefix Search:
 * ? Trie allows searching for words with a given prefix efficiently.
 * 
 * * Space Efficiency:
 * ? Uses less space for storing a large number of words with common prefixes.
 * 
 * ! Operations in Trie:
 * 
 * * Insert:
 * ? Adds a word character by character into the Trie.
 * ? If a character does not exist, a new node is created.
 * 
 * * Search:
 * ? Checks if a given word exists in the Trie.
 * ? Traverses through the characters and verifies the "endOfWord" flag.
 * 
 * * StartsWith:
 * ? Checks if a given prefix exists in any word stored in the Trie.
 * 
 * * Longest Matching Prefix:
 * ? Finds the longest prefix of a given word that exists in the Trie.
 * 
 * ! Applications of Trie:
 * 
 * * Auto-complete (Google search suggestions, mobile keyboards).
 * * Dictionary lookups and spell checkers.
 * * IP Routing (used in networking).
 * * Data Compression (like in Lempel-Ziv-Welch algorithm).
 * * Search Engines (efficiently storing indexed words).
 * 
 * ! Example Implementation:
 */

class TrieNode {
    constructor() {
        this.child = {}; // Stores child nodes (characters)
        this.endOfWord = false; // Marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.child[char]) {
                node.child[char] = new TrieNode(); // Create node if it doesn't exist
            }
            node = node.child[char]; // Move to the next node
        }
        node.endOfWord = true; // Mark the end of the word
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.child[char]) {
                return false; // If character is missing, word does not exist
            }
            node = node.child[char];
        }
        return node.endOfWord; // Return true if it's a complete word
    }

    // Check if any word starts with the given prefix
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.child[char]) {
                return false; // If character is missing, prefix is not found
            }
            node = node.child[char];
        }
        return true; // Prefix exists
    }

    // Find the longest matching prefix of a given word
    findLargePrefix(word) {
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


const trie = new Trie();
trie.insert('appleisgood');
trie.insert('appendies');
trie.insert('app');
trie.insert('appeil');

console.log(trie.findLargePrefix('app')); 
console.log(trie.findLargePrefix('applepie'));
