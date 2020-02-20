
const { GraphQLClient } = require('graphql-request');
const util = require('util');

const URL = 'https://api.yelp.com/v3/graphql';
const token = 'XC_zkc7oOdS5L6jYH51jgDfvc-8nwXIcViCY-4Lc1rb7ytcCQq2WIA3Qi-Ic4gmSwafOKfeS72kbIjgHUmQh90BE2kpRchZtdLHoEFA-byQA2iAIKPeHxX0bW7pOXnYx';

const client = new GraphQLClient(URL, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const query = `{
    search(term: "Ice cream",
    location: "Alpharetta",
    sort_by: "rating"
    limit: 5) {
    business {
        name
        rating
            location {
                city
                address1
            }
            reviews {
                text
                user {
                    name
                }
            }
        }
    }
}`
 
client.request(query).then(data => {
    console.log(util.inspect(data, {showHidden: false, depth: null})) // to print entire object in console
})
.catch(err => console.log(err))
