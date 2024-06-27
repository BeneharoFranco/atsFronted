import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Link, Outlet } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import logo from "../../assets/logo.png";

/*
const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});
*/

const Public = ({ children/*, classes*/ }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} >
                <Link /* to={"/Home"} */ style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", }} >
                    <img src={logo} alt="Company Logo" style={{ height: "70px" }} />
                    ATS
                </Link>
            </Typography>
        </Toolbar>
      </AppBar>

      <Box component={"main"} minHeight={"75vh"} container spacing={3} width={"100%"} sx={{ px:10, py:5 }} >
        {children ?? <Outlet />}
      </Box>
      {/* Footer */}
      <footer /*className={classes.footer}*/>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Public.propTypes = {
//   classes: PropTypes.object.isRequired,
  children: PropTypes.object,
};

export default Public;
// export default withStyles(styles)(Public);