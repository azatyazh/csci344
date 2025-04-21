-- Exercise 1 (done for you): Selecting all columns
SELECT * FROM users;



-- Exercise 2 (done for you): Selecting some columns
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3: Sorting



-- Exercise 4: Filtering




-- Exercise 5: Filtering with logical operators



-- Exercise 6: Using functions in a select statement




-- Exercise 7: Aggregating data




-- Exercise 8: Joining: two tables
SELECT posts.id, posts.image_url, posts.user_id
FROM posts
JOIN users ON posts.user_id = users.id
WHERE users.first_name = 'Nicholas' or users.first_name = 'Rebecca';


-- Exercise 9: More joining practice: two tables
SELECT posts.id, posts.pub_date, posts.user_id
FROM posts
JOIN following 
	ON posts.user_id = following.following_id
WHERE following.user_id = 26;

?


-- Exercise 10: More joining practice: three tables (Optional)




-- Exercise 11: Inserting records




-- Exercise 12: Deleting records




-- Exercise 13: Updating records




-- Exercise 14: More Querying Practice (Optional)
