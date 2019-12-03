import React from 'react';
import { connect } from 'react-redux';
import { Header } from './header';
import { Footer } from './footer';
import loader from './../assets/images/fancybox_loading.gif';


class ItemDetail extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const load = (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                Loading...
                <img style={{ border: '1px solid #fff' }} src={loader} alt="loading..." width={20} height={20}/>
            </div>
        )

        const backButton  = (
            <button onClick={() => { this.props.history.goBack() }} style={style}> Back </button>
        );

        return (
            <div>
                <Header/>
                    <section className="section ">
                        <div className="container" style={{ flexGrow: 1 }}>
                            <div style={{ marginBottom: 10 }}>
                                {backButton}
                            </div>
                            {
                                !this.props.item 
                                ? load :
                                (
                                    <div style={{ marginTop: 10 }}>
                                        <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: '50%', marginBottom: 4 }}>
                                            <img src={this.props.item.images.original.url} style={{ width: '60%', height: '600px' }} />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4  }}>
                                            <span style={{ paddingRight: 4 }}><b>Type:</b> {this.props.item.type.toUpperCase()} </span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4  }}>
                                            <span style={{ paddingRight: 4 }}><b>Title:</b> {this.props.item.title.toUpperCase()} </span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4  }}>
                                            <span style={{ paddingRight: 4 }}><b>Import Date/Time:</b> {this.props.item.import_datetime} </span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4  }}>
                                            <span style={{ paddingRight: 4 }}><b>Bitly Gif Url:</b> <a href={this.props.item.bitly_gif_url}>{this.props.item.bitly_gif_url}</a></span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <span style={{ paddingRight: 4 }}><b>Embed Url:</b>  <a href={this.props.item.embed_url}>{this.props.item.embed_url}</a></span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                <Footer/>
            </div>
        )
    }
}

const style = {
    backgroundColor: "#D8D8D8",
    color: "#585858",
    padding: 8,
    borderRadius: 6,
    width: 90,
    border: 0,
    cursor: 'pointer'
};

const mapStateToProps = state => {
    return {
        item: state.giphy.selectedItem
    }
}

export default connect(mapStateToProps)(ItemDetail);