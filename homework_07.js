function QueueItem(i, p) {
    this.item = i;
    this.priority = p;
}

function PriorityQueue() {
    this.queue = [];
}

PriorityQueue.prototype.enqueue = function(e) { 
    for (var i = 0;
         i < this.size() && e.priority > this.queue[i].priority;
         ++i);

    this.queue.splice(i, 0, e);
}
PriorityQueue.prototype.dequeue = function() { return this.queue.pop(); }
PriorityQueue.prototype.front = function() { return this.queue[this.queue.length - 1]; }
PriorityQueue.prototype.size = function() { return this.queue.length; }
PriorityQueue.prototype.isEmpty = function() { return this.size() == 0; }



/* callback */

function PriorityQueueC(sortfunction) {
    this.queue = [];
    this.callback = sortfunction;
}

PriorityQueueC.prototype.enqueue = function(e) { 
    for (var i = 0;
         i < this.size() && this.callback(e.priority, this.queue[i].priority) == 1;
         ++i);

    this.queue.splice(i, 0, e);
}

PriorityQueueC.prototype.dequeue = function() { return this.queue.pop(); }
PriorityQueueC.prototype.front = function() { return this.queue[this.queue.length - 1]; }
PriorityQueueC.prototype.size = function() { return this.queue.length; }
PriorityQueueC.prototype.isEmpty = function() { return this.size() == 0; }
