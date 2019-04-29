// Import the server configuration file

var config 			= require('./config'),

    /* Import the ExpressJS framework for Middleware/routing */
    express 		= require('express'),

    /* Import Mongoose for enabling communication with MongoDB and
       management of data handling tasks */
	mongoose 		= require('mongoose'),

    /* Import Body Parser module for enabling data from POST requests
       to be extracted and parsed */
	bodyParser      = require("body-parser"),

    /* Handle for storing the ExpressJS object */
	app 			   = express(),

    /* Use ExpressJS Router class to create modular route handlers */
	apiRouter     	= express.Router(),
   /* Import path module to provide utilities for working with file
       and directory paths */
   path 			   = require('path'),
   
    /* Define Mongoose connection to project's MongoDB database */
	connection 		= mongoose.connect(config.database, { useNewUrlParser: true })
    .then(() =>  console.log('connection to nutribien database succesful'))
    .catch((err) => console.error(err)),



    /* Import Schema for managing MongoDB database communication
       with Mongoose */
   NUTRITION         = require('./models/nutrition');
   PROFILE         = require('./models/profile');
   EXERCISE         = require('./models/exercise');
   MEASUREMENTS         = require('./models/measurements');



/* Manage size limits for POST/PUT requests */
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));




/* Manage CORS Access for ALL requests/responses */
app.use(function(req, res, next)
{
   /* Allow access from any requesting client */
   res.setHeader('Access-Control-Allow-Origin', '*');

   /* Allow access for any of the following Http request types */
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

   /* Set the Http request header */
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});

/////////////////////////////////////////////////NUTRITION/////////////////////////////////////////////////////////


/* Manage ALL Http GET requests to the specified route */
apiRouter.get('/nutriFit.nutrition', function(req, res)
{
    /* Use the gallery model and access Mongoose's API to
      retrieve ALL MongoDB documents whose displayed field
      has a value of true */
   NUTRITION.find((err, recs) =>
   {
      /* If we encounter an error log this to the console */
      if (err)
      {
         console.dir(err);
      }
      /* Send the retrieve documents based as JSON encoded
         data with the Router Response object */
      res.json({ records: recs });

   });
});

/* Manage ALL Http POST requests to the specified route */
apiRouter.post('/nutriFit.nutrition', function(req, res)
{
    /* Retrieve the posted data from the Request object and assign
      this to variables */
   var idnum        =   req.body.idnum,
       proteins 	  =	req.body.proteins,
       carbs        =	req.body.carbs,
       fats         =	req.body.fats,
       fibers       =	req.body.fibers,
       sugars       =	req.body.sugars,
       calories 	  =	req.body.calories;
       date         =   req.body.date;
                       


   /* Use the NUTRITION model to access the Mongoose API method to
      add the supplied data as a new document to the MongoDB
      database */
      NUTRITION.create( 
       { ID_NUM 	   : idnum,
         PROTEINS 	: proteins,
         CARBS 		: carbs,
         FATS 		   : fats,
         FIBERS 	   : fibers,
         SUGARS      : sugars,
         CALORIES    : calories,
         DATE        : date
        },
        function (err, small)
        {
            /* If we encounter an error log this to the console*/
            if (err)
            {
                console.dir(err);
            }
            
            /* Document was successfully created so send a JSON encoded
            success message back with the Router Response object */
            
            res.json({ message: 'success' });
        });

});

/* Handle PUT requests with expected recordID parameter */
apiRouter.put('/nutriFit.nutrition/:recordID', function(req, res)
{

    /* Use the NUTRITION model to access the Mongoose API method and
      find a specific document within the MongoDB database based
      on the document ID value supplied as a route parameter */
   NUTRITION.findById({ _id: req.params.recordID }, (err, recs) =>
   {

      /* If we encounter an error we log this to the console */
      if (err)
      {
         console.dir(err);
      }
      else
      {
         /* Assign the posted values to the respective fields for the retrieved
            document */
      	recs.ID_NUM 				= req.body.idnum 		|| recs.ID_NUM;
         recs.PROTEINS 		      = req.body.proteins 	|| recs.PROTEINS;
         recs.CARBS  		      = req.body.carbs	   || recs.CARBS;
         recs.FATS 		         = req.body.fats 	   || recs.FATS;
         recs.FIBERS 		      = req.body.fibers 	|| recs.FIBERS;
         recs.SUGARS 		      = req.body.sugars 	|| recs.SUGARS;
         recs.CALORIES 		      = req.body.calories 	|| recs.CALORIES;
         recs.DATE    		      = req.body.date 	   || recs.DATE;

         /* Save the updated document back to the database */
         recs.save((err, recs) =>
         {
            /* If we encounter an error send the details as a HTTP response */
            if (err)
            {
               res.status(500).send(err)
            }

            /* If all is good then send a JSON encoded map of the retrieved data
               as a HTTP response */
            res.json({ records: recs });
         });
      }

   });

});



/* Handle DELETE requests with expected recordID parameter */
apiRouter.delete('/nutriFit.nutrition/:recordID', function(req, res)
{
    /* Use the NUTRITION model to access the Mongoose API method and
      find & remove a specific document within the MongoDB database
      based on the document ID value supplied as a route parameter */
   NUTRITION.findByIdAndRemove({ _id: req.params.recordID }, (err, recs) =>
   {

      /* If we encounter an error we log this to the console */
      if (err)
      {
         console.dir(err);
      }


      /* If all is good then send a JSON encoded map of the removed data
         as a HTTP response */
      res.json({ records: recs });

   });
});



/////////////////////////////////////////////////WORK OUT/////////////////////////////////////////////////////////




/* Manage ALL Http GET requests to the specified route */
apiRouter.get('/nutriFit.workout', function(req, res)
{
    /* Use the gallery model and access Mongoose's API to
      retrieve ALL MongoDB documents whose displayed field
      has a value of true */
      WORKOUT.find((err, recs) =>
   {
      /* If we encounter an error log this to the console */
      if (err)
      {
         console.dir(err);
      }
      /* Send the retrieve documents based as JSON encoded
         data with the Router Response object */
      res.json({ records: recs });

   });
});

/* Manage ALL Http POST requests to the specified route */
apiRouter.post('/nutriFit.workout', function(req, res)
{
    /* Retrieve the posted data from the Request object and assign
      this to variables */
   var idnum         =   req.body.idnum,
       sport         =   req.body.sport,
       distance      =   req.body.distance,
       time          =   req.body.time;
       calories      =   req.body.calories;
       date          =   req.body.date;
                       


   /* Use the NUTRITION model to access the Mongoose API method to
      add the supplied data as a new document to the MongoDB
      database */
      WORKOUT.create( 
       { ID_NUM   : idnum,
         SPORT    : sport,
         DISTANCE : distance,
         TIME     : time,
         CALORIES : calories,
         DATE     : date

        },
        function (err, small)
        {
            /* If we encounter an error log this to the console*/
            if (err)
            {
                console.dir(err);
            }
            
            /* Document was successfully created so send a JSON encoded
            success message back with the Router Response object */
            
            res.json({ message: 'success' });
        });

});

/* Handle PUT requests with expected recordID parameter */
apiRouter.put('/nutriFit.workout/:recordID', function(req, res)
{

    /* Use the NUTRITION model to access the Mongoose API method and
      find a specific document within the MongoDB database based
      on the document ID value supplied as a route parameter */
      WORKOUT.findById({ _id: req.params.recordID }, (err, recs) =>
   {

      /* If we encounter an error we log this to the console */
      if (err)
      {
         console.dir(err);
      }
      else
      {
         /* Assign the posted values to the respective fields for the retrieved
            document */
        recs.ID_NUM 				= req.body.idnum 		   || recs.ID_NUM;
        recs.SPORT            = req.body.sport        || recs.SPORT;
        recs.DISTANCE         = req.body.distance     || recs.DISTANCE;
        recs.TIME             = req.body.time         || recs.TIME;
        recs.CALORIES         = req.body.calories     || recs.calories;
        recs.DATE             = req.body.date         || recs.DATE;

         /* Save the updated document back to the database */
         recs.save((err, recs) =>
         {
            /* If we encounter an error send the details as a HTTP response */
            if (err)
            {
               res.status(500).send(err)
            }

            /* If all is good then send a JSON encoded map of the retrieved data
               as a HTTP response */
            res.json({ records: recs });
         });
      }

   });

});



/* Handle DELETE requests with expected recordID parameter */
apiRouter.delete('/nutriFit.workout/:recordID', function(req, res)
{
    /* Use the NUTRITION model to access the Mongoose API method and
      find & remove a specific document within the MongoDB database
      based on the document ID value supplied as a route parameter */
      WORKOUT.findByIdAndRemove({ _id: req.params.recordID }, (err, recs) =>
   {

      /* If we encounter an error we log this to the console */
      if (err)
      {
         console.dir(err);
      }


      /* If all is good then send a JSON encoded map of the removed data
         as a HTTP response */
      res.json({ records: recs });

   });
});
///////////////////////////////////////////MEASSUREMENTS///////////////////////////////////////////////////////////////

/* Manage ALL Http GET requests to the specified route */
apiRouter.get('/nutriFit.measurements', function(req, res)
{
    /* Use the gallery model and access Mongoose's API to
      retrieve ALL MongoDB documents whose displayed field
      has a value of true */
   MEASUREMENTS.find((err, recs) =>
   {
      /* If we encounter an error log this to the console */
      if (err)
      {
         console.dir(err);
      }
      /* Send the retrieve documents based as JSON encoded
         data with the Router Response object */
      res.json({ records: recs });

   });
});

/* Manage ALL Http POST requests to the specified route */
apiRouter.post('/nutriFit.measurements', function(req, res)
{
    /* Retrieve the posted data from the Request object and assign
      this to variables */
   var idnum        =   req.body.idnum,
      neck          =  req.body.neck,
       hip          =  req.body.hip,
       thigh        =  req.body.thigh,
       belly        =  req.body.belly,
       bicep        =  req.body.bicep,
       date         =  req.body.bicep;
                       

   /* Use the NUTRITION model to access the Mongoose API method to
      add the supplied data as a new document to the MongoDB
      database */
      MEASUREMENTS.create( 
       { ID_NUM   : idnum,
         NECK     : neck,
         HIP      : hip,
         THIGH    : thigh,
         BELLY    : belly,
         BICEP    : bicep,
         DATE     : date

        },
        function (err, small)
        {
            /* If we encounter an error log this to the console*/
            if (err)
            {
                console.dir(err);
            }
            
            /* Document was successfully created so send a JSON encoded
            success message back with the Router Response object */
            
            res.json({ message: 'success' });
        });

});


/*here*/

/* Handle PUT requests with expected recordID parameter */
apiRouter.put('/nutriFit.measurements/:recordID', function(req, res)
{

    /* Use the NUTRITION model to access the Mongoose API method and
      find a specific document within the MongoDB database based
      on the document ID value supplied as a route parameter */
      MEASUREMENTS.findById({ _id: req.params.recordID }, (err, recs) =>
   {

      /* If we encounter an error we log this to the console */
      if (err)
      {
         console.dir(err);
      }
      else
      {
         /* Assign the posted values to the respective fields for the retrieved
            document */
         recs.ID_NUM         = req.body.idnum     || recs.ID_NUM;
         recs.NECK           = req.body.neck      || recs.NECK;
         recs.HIP            = req.body.hip       || recs.HIP;
         recs.THIGH          = req.body.thigh     || recs.THIGH;
         recs.BELLY          = req.body.belly     || recs.BELLY;
         recs.BICEP          = req.body.bicep     || recs.BICEP;
         recs.DATE           = req.body.date      || recs.DATE;

         /* Save the updated document back to the database */
         recs.save((err, recs) =>
         {
            /* If we encounter an error send the details as a HTTP response */
            if (err)
            {
               res.status(500).send(err)
            }

            /* If all is good then send a JSON encoded map of the retrieved data
               as a HTTP response */
            res.json({ records: recs });
         });
      }

   });

});



/* Handle DELETE requests with expected recordID parameter */
apiRouter.delete('/nutriFit.measurements/:recordID', function(req, res)
{
    /* Use the NUTRITION model to access the Mongoose API method and
      find & remove a specific document within the MongoDB database
      based on the document ID value supplied as a route parameter */
      MEASUREMENTS.findByIdAndRemove({ _id: req.params.recordID }, (err, recs) =>
   {

      /* If we encounter an error we log this to the console */
      if (err)
      {
         console.dir(err);
      }


      /* If all is good then send a JSON encoded map of the removed data
         as a HTTP response */
      res.json({ records: recs });

   });
});



////////////////////////////////////////////////PROFILE//////////////////////////////////////////////////////////

apiRouter.get('/nutriFit.profile', function(req, res)
{
    /* Use the gallery model and access Mongoose's API to
      retrieve ALL MongoDB documents whose displayed field
      has a value of true */
   PROFILE.find((err, recs) =>
   {
      /* If we encounter an error log this to the console */
      if (err)
      {
         console.dir(err);
      }
      /* Send the retrieve documents based as JSON encoded
         data with the Router Response object */
      res.json({ records: recs });

   });
});


/* Manage ALL Http POST requests to the specified route */
apiRouter.post('/nutriFit.profile',function(req, res)
{
    /* Retrieve the posted data from the Request object and assign
      this to variables */
   var idnum        =   req.body.idnum,
       fName 	  =	req.body.fName,
       lName        =	req.body.lName,
       phone         =	req.body.phone,
       email       =	req.body.email,
       password 	  =	req.body.password;
       height 	  =	req.body.height;
       birthday 	  =	req.body.birthday;
       image 	  =	req.body.image;
       thumbnail 	  =	req.body.thumbnail;
       

                       


   /* Use the NUTRITION model to access the Mongoose API method to
      add the supplied data as a new document to the MongoDB
      database */
      PROFILE.create( 
       { 
         ID_NUM          : idnum,
         FIRSTNAME       : fName,
         LASTNAME        : lName,
         PHONE           : phone,
         EMAIL           : email, 
         PASSWORD        : password,
         DATE_OF_BIRTH   : birthday,
         HEIGHT          : height,   
         PICTURE         : image, 
         THUMBNAIL       : thumbnail 
        },
        function (err, small)
        {
            /* If we encounter an error log this to the console*/
            if (err)
            {
                console.dir(err);
            }
            
            /* Document was successfully created so send a JSON encoded
            success message back with the Router Response object */
            
            res.json({ message: 'success' });
        });

});

/* Handle PUT requests with expected recordID parameter */
apiRouter.put('/nutriFit.profile/:recordID', function(req, res)
{

    /* Use the NUTRITION model to access the Mongoose API method and
      find a specific document within the MongoDB database based
      on the document ID value supplied as a route parameter */
   PROFILE.findById({ _id: req.params.recordID }, (err, recs) =>
   {

      /* If we encounter an error we log this to the console */
      if (err)
      {
         console.dir(err);
      }
      else
      {
         /* Assign the posted values to the respective fields for the retrieved
            document */
      	recs.ID_NUM 				= req.body.idnum 		|| recs.ID_NUM;
         recs.LASTNAME 		      = req.body.lName 	|| recs.LASTNAME;
         recs.FIRSTNAME  		      = req.body.fName	   || recs.FIRSTNAME;
         recs.PHONE 		         = req.body.phone 	   || recs.PHONE;
         recs.EMAIL 		      = req.body.email 	|| recs.EMAIL;
         recs.PASSWORD 		      = req.body.password 	|| recs.password;
         recs.DATE_OF_BIRTH 		      = req.body.birthday 	|| recs.DATE_OF_BIRTH;
         recs.HEIGHT 		      = req.body.height 	|| recs.HEIGHT;
         recs.PICTURE 		      = req.body.image 	|| recs.PICTURE;
         recs.THUMBNAIL 		      = req.body.thumbnail 	|| recs.THUMBNAIL;

         /* Save the updated document back to the database */
         recs.save((err, recs) =>
         {
            /* If we encounter an error send the details as a HTTP response */
            if (err)
            {
               res.status(500).send(err)
            }

            /* If all is good then send a JSON encoded map of the retrieved data
               as a HTTP response */
            res.json({ records: recs });
         });
      }

   });

});



/* Handle DELETE requests with expected recordID parameter */
apiRouter.delete('/nutriFit.profile/:recordID', function(req, res)
{
    /* Use the NUTRITION model to access the Mongoose API method and
      find & remove a specific document within the MongoDB database
      based on the document ID value supplied as a route parameter */
   PROFILE.findByIdAndRemove({ _id: req.params.recordID }, (err, recs) =>
   {

      /* If we encounter an error we log this to the console */
      if (err)
      {
         console.dir(err);
      }


      /* If all is good then send a JSON encoded map of the removed data
         as a HTTP response */
      res.json({ records: recs });

   });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////// HAS TO STAY AT BOTTOM //////////////////////

/* Mount the specified Middleware function based on matching path
   ALL Http requests will be sent to /api followed by whatever the
   requested endpoint is
*/
app.use('/api', apiRouter);


/* Open a UNIX socket, listen for connections to the specified port */
app.listen(config.port);