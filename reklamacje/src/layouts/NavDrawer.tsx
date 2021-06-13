import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link, LinkProps } from 'react-router-dom'
interface ListItemLinkProps {
 icon?: React.ReactElement;
 primary: string;
 to: string;
}
function ListItemLink(props: ListItemLinkProps) {
 const { icon, primary, to } = props;
 const renderLink = React.useMemo(
 () =>
 React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
 <Link to={to} ref={ref} {...itemProps} />
 )),
 [to],
 );
 return (
 <li>
 <ListItem button component={renderLink}>
 {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
 <ListItemText primary={primary} />
 </ListItem>
 </li>
 );
}
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
 createStyles({
 root: {
 display: 'flex',
 },
 appBar: {
 width: `calc(100% - ${drawerWidth}px)`,
 marginLeft: drawerWidth,
 },
 drawer: {
 width: drawerWidth,
 flexShrink: 0,
 },
 drawerPaper: {
 width: drawerWidth,
 },
 toolbar: (theme.mixins.toolbar as any),
 content: {
 flexGrow: 1,
 backgroundColor: theme.palette.background.default,
 padding: theme.spacing(3),
 },
 }),
);
const NavDrawer: React.FC = ({ children }) => {
 const classes = useStyles();
 return (
 <div className={classes.root}>
 <CssBaseline />
 <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
    <Typography variant="h6" noWrap>
 Reklamacje
 </Typography>
 </Toolbar>
 </AppBar>
 <Drawer
 className={classes.drawer}
 variant="permanent"
 classes={{
 paper: classes.drawerPaper,
 }}
 anchor="left">
 <div className={classes.toolbar} />
 <Divider />
 <List>
 <ListItemLink primary='Dodaj zgłoszenie' icon={<InboxIcon />} to='/complaint' />
 <ListItemLink primary='Zgłoszenia' icon={<MailIcon />} to='/' />
</List>
 </Drawer>
 <main className={classes.content}>
 <div className={classes.toolbar} />
 {children}
 </main>
 </div>
 );
}
export default NavDrawer;