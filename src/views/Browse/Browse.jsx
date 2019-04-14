import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Heading from "components/Heading/Heading.jsx";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class AlertDialog extends React.Component {
    state = {
      open: false,
    };
  
    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
 

const styles = theme => ({
  root: {
    flexGrow: 1
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },

  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },

  button: {
    margin: theme.spacing.unit,
  },

  card: {
    maxWidth: 345,
  },

  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

  dense: {
    marginTop: 16,
  },

  menu: {
    width: 200,
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },

  p: {
      color: '#ff0000',
  }

});


function Browse(props) {
    
  const { classes } = props;

  
  return (
    
    <div className={classes.root}>
    
      <Heading
        title="Browse Database"
        textAlign="center"   
      />

<TextField
          id="outlined-full-width"
          label="Search for a key term"
          style={{ margin: 8 }}
          placeholder="Search"
          helperText=""
          fullWidth
          margin="50"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        

<div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Record poster"
          className={classes.media}
          height="240"
          image="https://etdb.caltech.edu/ipfs/QmZPqQh9vkuQsS4nJZPucQ9MXVM2kyvyEDJPovvxC22hFS/keyimg_ps2014-06-30-33_s.jpg"
          title="Record poster"
        />
        <CardContent>
          <Typography component="p">
            Record Title
          </Typography>
          <Typography component="p">
            Record Meta
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
         <Card className={classes.card}>       <CardActionArea>         <CardMedia           component="img"           alt="Record poster"           className={classes.media}           height="240"           image="https://etdb.caltech.edu/ipfs/QmZPqQh9vkuQsS4nJZPucQ9MXVM2kyvyEDJPovvxC22hFS/keyimg_ps2014-06-30-33_s.jpg"           title="Record poster"         />         <CardContent>           <Typography gutterBottom variant="h5" component="h2">             Record Title           </Typography>           <Typography component="p">             Record Meta           </Typography>         </CardContent>       </CardActionArea>     </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
         <Card className={classes.card}>       <CardActionArea>         <CardMedia           component="img"           alt="Record poster"           className={classes.media}           height="240"           image="https://etdb.caltech.edu/ipfs/QmZPqQh9vkuQsS4nJZPucQ9MXVM2kyvyEDJPovvxC22hFS/keyimg_ps2014-06-30-33_s.jpg"           title="Record poster"         />         <CardContent>           <Typography gutterBottom variant="h5" component="h2">             Record Title           </Typography>           <Typography component="p">             Record Meta           </Typography>         </CardContent>       </CardActionArea>     </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
         <Card className={classes.card}>       <CardActionArea>         <CardMedia           component="img"           alt="Record poster"           className={classes.media}           height="240"           image="https://etdb.caltech.edu/ipfs/QmZPqQh9vkuQsS4nJZPucQ9MXVM2kyvyEDJPovvxC22hFS/keyimg_ps2014-06-30-33_s.jpg"           title="Record poster"         />         <CardContent>           <Typography gutterBottom variant="h5" component="h2">             Record Title           </Typography>           <Typography component="p">             Record Meta           </Typography>         </CardContent>       </CardActionArea>     </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
         <Card className={classes.card}>       <CardActionArea>         <CardMedia           component="img"           alt="Record poster"           className={classes.media}           height="240"           image="https://etdb.caltech.edu/ipfs/QmZPqQh9vkuQsS4nJZPucQ9MXVM2kyvyEDJPovvxC22hFS/keyimg_ps2014-06-30-33_s.jpg"           title="Record poster"         />         <CardContent>           <Typography gutterBottom variant="h5" component="h2">             Record Title           </Typography>           <Typography component="p">             Record Meta           </Typography>         </CardContent>       </CardActionArea>     </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
         <Card className={classes.card}>       <CardActionArea>         <CardMedia           component="img"           alt="Record poster"           className={classes.media}           height="240"           image="https://etdb.caltech.edu/ipfs/QmZPqQh9vkuQsS4nJZPucQ9MXVM2kyvyEDJPovvxC22hFS/keyimg_ps2014-06-30-33_s.jpg"           title="Record poster"         />         <CardContent>           <Typography gutterBottom variant="h5" component="h2">             Record Title           </Typography>           <Typography component="p">             Record Meta           </Typography>         </CardContent>       </CardActionArea>     </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
         <Card className={classes.card}>       <CardActionArea>         <CardMedia           component="img"           alt="Record poster"           className={classes.media}           height="240"           image="https://etdb.caltech.edu/ipfs/QmZPqQh9vkuQsS4nJZPucQ9MXVM2kyvyEDJPovvxC22hFS/keyimg_ps2014-06-30-33_s.jpg"           title="Record poster"         />         <CardContent>           <Typography gutterBottom variant="h5" component="h2">             Record Title           </Typography>           <Typography component="p">             Record Meta           </Typography>         </CardContent>       </CardActionArea>     </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
         <Card className={classes.card}>       <CardActionArea>         <CardMedia           component="img"           alt="Record poster"           className={classes.media}           height="240"           image="https://etdb.caltech.edu/ipfs/QmZPqQh9vkuQsS4nJZPucQ9MXVM2kyvyEDJPovvxC22hFS/keyimg_ps2014-06-30-33_s.jpg"           title="Record poster"         />         <CardContent>           <Typography gutterBottom variant="h5" component="h2">             Record Title           </Typography>           <Typography component="p">             Record Meta           </Typography>         </CardContent>       </CardActionArea>     </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
         <Card className={classes.card}>       <CardActionArea>         <CardMedia           component="img"           alt="Record poster"           className={classes.media}           height="240"           image="https://etdb.caltech.edu/ipfs/QmZPqQh9vkuQsS4nJZPucQ9MXVM2kyvyEDJPovvxC22hFS/keyimg_ps2014-06-30-33_s.jpg"           title="Record poster"         />         <CardContent>           <Typography gutterBottom variant="h5" component="h2">             Record Title           </Typography>           <Typography component="p">             Record Meta           </Typography>         </CardContent>       </CardActionArea>     </Card>
        </Grid>
      </Grid>


      <Button variant="contained" className={classes.button}>
        Previous
      </Button>

      <Button variant="contained" className={classes.button}>
        Next
      </Button>
    </div>
  );
}



Browse.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Browse);
