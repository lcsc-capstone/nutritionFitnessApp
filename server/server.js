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
    .catch((err) => console.error(err));

    /* Import Schema for managing MongoDB database communication
       with Mongoose */
	NUTRITION         = require('./models/nutrition');
   PROFILE         = require('./models/profile');
   EXERCISE         = require('./models/exercise');
   MEASUREMENTS        = require('./models/measurements');
   STATISTICS         = require('./models/statistics');


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




/* Manage ALL Http GET requests to the specified route */
apiRouter.get('/nutrition', function(req, res)
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
       calories 	  =	req.body.calories;
                       


   /* Use the NUTRITION model to access the Mongoose API method to
      add the supplied data as a new document to the MongoDB
      database */
      NUTRITION.create(  //insertMany makes no difference
       { ID_NUM 	   : idnum,
         PROTEINS 	: proteins,
         CARBS 		: carbs,
         FATS 		   : fats,
         FIBERS 	   : fibers,
         CALORIES    : calories
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
apiRouter.put('/nutrition:recordID', function(req, res)
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
         recs.CALORIES 		      = req.body.calories 	|| recs.CALORIES;

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
apiRouter.delete('/nutrition:recordID', function(req, res)
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

/* Manage ALL Http GET requests to the specified route */
apiRouter.get('/profile', function(req, res)
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
apiRouter.post('/nutriFit.profile', function(req, res)
{
    /* Retrieve the posted data from the Request object and assign
      this to variables */
   var id_num        =  req.body.id_num,
       firstName 	   =	req.body.firstName,
       lastName         =	req.body.lastName,
       phoneNumber         =	req.body.phoneNumber,
       emailAddress         =	req.body.emailAddress,
       password 	   =	req.body.password;
       birthday 	      =	req.body.birthday;
       height        = req.body.height;

                       


   /* Use the NUTRITION model to access the Mongoose API method to
      add the supplied data as a new document to the MongoDB
      database */
      NUTRITION.create(  //insertMany makes no difference
       { 
         ID_NUM: id_num,
         LASTNAME: lastName,
         FIRSTNAME: firstName,
         PHONE: phoneNumber,
         EMAIL: emailAddress,
         PASSWORD: password,
         DATE_OF_BIRTH: birthday,
         HEIGHT: height
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
apiRouter.put('/nutrition:recordID', function(req, res)
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
         recs.CALORIES 		      = req.body.calories 	|| recs.CALORIES;

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
apiRouter.delete('/nutrition:recordID', function(req, res)
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
/* Mount the specified Middleware function based on matching path
   ALL Http requests will be sent to /api followed by whatever the
   requested endpoint is
*/
app.use('/api', apiRouter);


/* Open a UNIX socket, listen for connections to the specified port */
app.listen(config.port);