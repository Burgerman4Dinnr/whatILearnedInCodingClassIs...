INSERT INTO actor (fName, lName)
VALUES ('seth', 'rogan');

INSERT INTO actor (fName, lName)
VALUES ('james', 'franko'), ('randall', 'park'), ('lizzie', 'capian'), ('diana', 'bang');

UPDATE actor 
SET fName = 'owen', lName = 'wilson'
WHERE actor_id = 6;

INSERT INTO actor (fName, lName)
VALUES 
('tim', 'robbins'), 
('john', 'travolta'), 
('christian', 'bale'), 
('tom', 'hanks'), ('matthew', 'broderick'), ('keanu', 'reeves'), ('jodie', 'foster'), ('sam', 'neill'), ('leonardo', 'dicaprio'), ('michael clarke'), ('heath ledger'), ('kakule', 'william'), ('sam', 'neill');

INSERT INTO producer (producer)
VALUES ('evan goldberg'),
('john lasseter'),
('frank darabont'),
('tarantino'),
('nolan'),
('robert zemeckis'),
('roger allers'),
('the wachowski brothers'),
('steven spielberg'),
('jonathan demme'),
('steven spielberg'),
('james cameron'),
('frank darabont'),
('christopher nolan'),
('isaac nabwana');

INSERT INTO language (lang_name)
VALUES ('english'),
('Luganda'),
('spanish'),
('french');

INSERT INTO movie (
    title, 
    duration, 
    rating,
    producer_id, 
    year, 
    language_id, 
    description, 
    image)
VALUES(
    'the interview', 
    112,
    'R', 
    1, 
    2014, 
    1, 
    'two guys go to north korea', 
    'https://m.media-amazon.com/images/M/MV5BMTQzMTcwMzgyMV5BMl5BanBnXkFtZTgwMzAyMzQ2MzE@._V1_.jpg'
)
(
    'cars', 90, 'g', 2, 2006, 1, 'a famous car moves to a new town', 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1fwkhcm_90dc1edd.jpeg?region=0,0,300,450'
);
(
    'the shawshank', 142, 'r', 3, 1994, 1, 'A story about hope, friendship, and redemption set in a prison', 'https://m.media-amazon.com/images/I/51SZp7RhtQL._AC_.jpg'
);
(
    'pulp fiction', 154, 'r', 4, 1994, 1, 'An eclectic mix of interrelated stories about gangsters, criminals, and oddballs in Los Angeles', 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
);
(
    'the dark knight', 152, 'pg-13', 5, 2008, 1, 'Batman faces his ultimate challenge as the Joker wreaks havoc on Gotham City', 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'
);
(
    'forrest gump', 142, 'pg-13', 6, 1994, 1, 'A slow-witted but athletically-talented man experiences some of the defining events of the 20th century', 'https://i.ytimg.com/vi/hf_lCA-T99c/movieposter_en.jpg'
);
(
    'the lion king', 88, 'g', 7, 1994, 1, 'A young lion prince is cast out of his pride and must learn to be a true king. ', 'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg'
);
(
    'the matrix', 136, 'r', 8, 1999, 1, 'A computer hacker learns the truth about the world and his role in the battle against its controllers.', 'https://flxt.tmsimg.com/assets/p22804_p_v8_av.jpg'
);
(
    'saving private ryan', 169, 'r', 9, 1998, 1, 'A group of American soldiers are sent on a mission to save one man during the Normandy invasion', 'https://musicart.xboxlive.com/7/8cb61100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
);
(
    'the silence of the lambs', 118, 'r', 10, 1991, 1, 'An FBI trainee must track down a serial killer while navigating a dangerous game of cat and mouse', 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
);
(
    'jurrasic park', 126, 'pg-13', 11, 1993, 1, 'A billionaire creates a theme park featuring genetically engineered dinosaurs, but disaster strikes when they break loose', 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'
);
(
    'titanic', 194, 'pg-13', 12, 1997, 1, 'A young woman falls in love with a poor artist on board the ill-fated voyage of the Titanic', 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'
);
(
    'the green mile', 189, 'r', 13, 1999, 1, 'A death row guard has a life-changing experience when he befriends an inmate with mystical powers', 'https://flxt.tmsimg.com/assets/p24429_p_v12_bf.jpg'
);
(
    'inception', 148, 'pg-13', 14, 2010, 1, 'A skilled thief is given the opportunity to pull off the heist of his life to plant an idea into someones subconscious', 'https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg'
);
(
    'who killed captain alex?', 95, 'nr', 15, 2010, 2, 'A guerrilla army of "commandos" fights to take down a ruthless warlord, who is wreaking havoc on their city.', 'https://m.media-amazon.com/images/M/MV5BOGQ4NTRhNjMtODYyYi00NjJhLThmZTUtNmI4MTdlZWM5MDliXkEyXkFqcGdeQXVyMzMzMTExNzI@._V1_.jpg'
);

INSERT INTO movie (
    title, 
    duration, 
    rating,
    producer_id, 
    year, 
    language_id, 
    description, 
    image)
VALUES('the wizard of oz', 101, 'g', 16, 1939, 1, 'some wizard in oz or something.', 'https://flxt.tmsimg.com/assets/p5095_p_v12_an.jpg');

INSERT INTO actor (fName, lName)
VALUES('judy', 'garland'),('jack', 'haley'),('ray','bolger'),('bert','lahr'),('frank','morgan');