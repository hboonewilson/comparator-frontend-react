const testData = {
    data : [
        {
          "name" : "sort",
          "endPoint" : "/sort",
          "input" : "Unsorted Array ([4,5,8,1,10,15])",
          "output" : "Sorted input Array ([1,4,5,8,10,15])",
          "description" : "ABCDEFGHIJKLMNOPQRSTUV",
          "isActive" : true
        },
        {
          "name" : "parallel",
          "endPoint" : "/parallel",
          "input" : "Comparator Network not in paralell",
          "output" : "Comparator Network in parallel",
          "description" : "YOYoYO",
          "isActive" : false
        },
        {
          "name" : "create",
          "endPoint" : "/create",
          "input" : "Number n",
          "output" : "Parallel Comparator Network to sort Array of n elements",
          "description" : "YOYoYO",
          "isActive" : false
        },
        {
          "name" : "create",
          "endPoint" : "/create",
          "input" : "Number n",
          "output" : "Parallel Comparator Network to sort array of N size",
          "description" : "YOYoYO",
          "isActive" : false
        },
        {
          "name" : "test",
          "endPoint" : "/test",
          "input" : "Network",
          "output" : "True/False on if comparator network input Network is a comparator network",
          "description" : "YOYoYO",
          "isActive" : false
        }
      ]
}
module.exports = testData