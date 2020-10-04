var LRUCache = function (capacity) {
  (this.q = new Set()), (this.h = new Map()), (this.capacity = capacity);
};

LRUCache.prototype.get = function (key, v) {
  return (
    ((v = this.h.get(key)) && (this.q.delete(key), this.q.add(key)) && v) || -1
  );
};

LRUCache.prototype.put = function (key, value, k) {
  this.h.set(key, value), this.q.delete(key), this.q.add(key);
  this.q.size > this.capacity &&
    ((k = this.q.values().next().value), this.h.delete(k), this.q.delete(k));
};
