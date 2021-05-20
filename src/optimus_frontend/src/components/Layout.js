import {useHistory, useLocation} from 'react-router-dom'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import StorageIcon from '@material-ui/icons/Storage';

import {
    AppBar,
    Avatar,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Toolbar
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            width: '100%',
            padding: theme.spacing(3),
        },
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2),
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        date: {
            flexGrow: 1
        },
        toolbar: theme.mixins.toolbar,
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'Кампании',
            icon: <AccountBalanceIcon color="primary" />,
            path: '/scenarios'
        },
        {
            text: 'Источники данных',
            icon: <StorageIcon color="primary"/>,
            // icon: <Icon/>,
            path: '/data-sources'
        }
    ];

    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar
                position="fixed"
                className={classes.appBar}
                elevation={0}
                color="primary"
            >
                <Toolbar className={classes.toolbar}>
                    <Typography>User</Typography>
                    <Avatar className={classes.avatar} src="/mario-av.png" />
                </Toolbar>
            </AppBar>

            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Optimus
                    </Typography>
                </div>

                {/* links/list section */}
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            {/* main content */}
            <div className={classes.page}>
                <div className={classes.toolbar}/>
                { children }
            </div>
        </div>
    )
}