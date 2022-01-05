// Find Movies with rating:8
db.movies.find({rating:8}).pretty()

// Update Movie rating to 9
db.movies.update({   name: "Jai Bhim" }, {   "$set": {     rating: 9   } })