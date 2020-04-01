/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  this._storage = {};
  this._head = 0;
  this._rear = 0;
};

Queue.prototype.add = function(value) {
  if (this._head === this._rear) {
    this._storage[this._head] = value;
    this._storage[this._rear++] = value;
  } else {
    this._storage[this._rear++] = value;
  }
};

Queue.prototype.remove = function(value) {
  let result;
  if (this._head !== this._rear) {
    result = this._storage[this._head++];
  }
  return result;
};

module.exports = Queue;
