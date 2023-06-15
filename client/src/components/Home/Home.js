import React, {useState, useEffect} from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { getPosts ,getPostsBySearch  } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}



const Home = () => {
    // because App.js is the only link between Form and Post
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

       // after every SUBMIT, we get get a new post on the page
    // without manually refreshing the page
 

     const searchPost = () => {
      if (search.trim() || tags ) {
        dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
        history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
      } else {
        history.push('/');
      }
    };

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    

    const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
        searchPost();
      }
    };

 

  return (
    <Grow in>
                <Container maxWidth="xl">
              <Grid Container justify="space-between" alignItems="stretch" spacing={3}  style={{display: "flex"}} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                           <Posts setCurrentId = {setCurrentId}/>
                          </Grid>
                        <Grid item xs={2} sm={4} md={3} style={{marginLeft: 10}}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                        <TextField  
                        name="search" 
                        variant="outlined" 
                        label="Search Memories" 
                        onKeyPress={handleKeyPress}
                        fullWidth 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                        />
                        <ChipInput
                          style={{ margin: '10px 0' }}
                          value={tags}
                          onAdd={handleAdd}
                          onDelete={handleDelete}
                          label="Search Tags"
                          variant="outlined"
                            />
                             <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                            <Form currentId={currentId} setCurrentId = {setCurrentId}/>
                            <Paper elevation={6}>
                            <Pagination page={page}/>
                            </Paper>
                            </AppBar>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
  );
};

export default Home