# DynamoDB
In thie time, I used AWS Dynamodb to store movie data.


## Table Settings

### Categories

| keyName | keyType | valueType | memo |
| --- | --- | --- | --- |
| categoryId | primaryKey | String | |
| categoryName | | String | |
| numOfMovies |  | Number | |
| imageUrl | | String | Image is located at S3  |
| createdAt | | String | ex.:2021-09-27T15:08:10 |
| updatedAt | | String | ex.:2021-09-27T15:08:10 |

### Movies

| keyName | keyType | valueType | memo |
| --- | --- | --- | --- |
| movieId | primarykey | String | |
| title | | String | |
| averageRating | | Number | |
| imageUrl | | String or Null | |
| description | | String or Null | |
| imdbId | | String | identifier for movies used by <http://www.imdb.com>. |
| tmdbId | | String | identifier for movies used by <https://www.themoviedb.org>. |
| nearestMovieIds | | String or Null | ex.:"['1','2','3']" |
| createdAt | | String | ex.:2021-09-27T15:08:10 |
| updatedAt | | String | ex.:2021-09-27T15:08:10 |

### MoviesToCategories
| keyName | keyType | valueType | memo |
| --- | --- | --- | --- |
| categoryId | partitionKey | String | |
| movieId | sortKey, GlobalSecondaryIndex(primarykey) | String | |
| averageRatingOfMovie | LocalSecondaryIndex(sortkey) | Number | |
| createdAt | | String | ex.:2021-09-27T15:08:10 |
| updatedAt | | String | ex.:2021-09-27T15:08:10 |

## File Structure

```bash
|- ml-latest-small # Downloaded from MovieLens
|- table-data |-csv/ # Data which uploaded to DynamoDB table.
              |- ipynb files # Files to create and upload the Dynamodb table data.
|- template.yaml # SAM setting file which used to create tables.
```


