doubts:-
what is class new constructor extends when to use new keyword, what is middelwares


1. Total error handling is done in this project
2. the search and the filter function is defined in the api Features
3. Inthe apiFeatures $regex:/product/ is uesed, it a inBuilt method by mongoose, this helps to find the search
   if we search samosa, it will show the reult of samosa but also samosamosa.
4. In the apiFeatures there is something used as i, which tells the regex to ignore the uppercase and lower case

5. In the apiFeatures there : -
   const queryCopy = { ...this.queryStr };
   const removeFields = ["keyword", "page", "limit"];
   removeFields.forEach((key) => delete queryCopy[key]);

   here, removeFields will remove all the things in the removeFields from the url and give the output as :-
   before removing : { keyword: 'product', category: 'cimputer', page: '2', limit: '3' }
   after removing : { category: 'cimputer' }
   after removing will get only category 

