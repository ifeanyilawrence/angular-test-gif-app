import React from 'react';
import { connect } from 'react-redux';
import { SearchField } from './searchField';
import ResultList from './resultList';
import { getGif, storeSelectedItem } from './../store/actions/giphy';
import { Header } from './header';
import { Footer } from './footer';

class Home extends React.Component {
    
    state = {
        searchTerm: '',
        limit: 15
    }

    scrollDiv = null;

    setScrollDivRef = element => {
        this.scrollDiv = element;
    };

    setScrollDivListener = () => {
        if (this.scrollDiv){
            this.scrollDiv.addEventListener("scroll", () => {
                if ( this.scrollDiv.scrollTop + this.scrollDiv.clientHeight >= this.scrollDiv.scrollHeight && !this.props.loading ) {
                    this.loadItems();
                }
            });
        }
    };

    componentDidMount() {
        this.setScrollDivListener();
        if (!this.state.searchTerm && this.props.searchItemText) {
            this.setState(prevState => ({ ...prevState, searchTerm: this.props.searchItemText}));
        }
    }

    inputHandler = (e) => {
        const searchTerm = e.target.value;
        this.setState(prevState => ({
            searchTerm
        }));
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        
        this.loadItems();
    }

    loadItems = () => {
        const searchTerm = this.state.searchTerm;
        if (searchTerm) {
            this.props.onGetItems(searchTerm, this.state.limit, this.props.offSet);
        }
        else {
            alert("Enter a search term in the text field.")
        }
    }

    itemClickHandler = (id) => {
        this.props.onStoreItem(this.props.items.find(item => item.id == id))
        this.props.history.push('/item');
    }
    
    render() {

        return (
            <div>
                <Header/>
                <section className="section ">
                    <div className="container" style={{ flexGrow: 1 }}>
                        <SearchField onInputChange={this.inputHandler} onSubmit={this.formSubmitHandler} loading={this.props.loading} />
                        <ResultList itemClick={this.itemClickHandler} items={this.props.items} divRef={this.setScrollDivRef} loading={this.props.loading} />
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.giphy.items,
        loading: state.giphy.loading,
        offSet: state.giphy.offSet,
        searchItemText: state.giphy.searchItemText,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetItems: (searchTerm, limit, offSet) => dispatch(getGif(searchTerm, limit, offSet)),
        onStoreItem: (item) => dispatch(storeSelectedItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);