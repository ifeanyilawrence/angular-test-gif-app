import React from 'react';
import loader from './../assets/images/fancybox_loading.gif';

export default class ResultList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const load = (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                Loading...
                <img style={{ border: '1px solid #fff' }} src={loader} alt="loading..." width={20} height={20}/>
            </div>
        )

        return (
            <div ref={this.props.divRef} style={{ height: this.props.items.length > 0 && "640px", overflow: "auto"}}>
                { this.props.items.length > 0 && (<h4 style={{ fontWeight: 'bold' }}>Results</h4>) }
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'  }}>
                {
                    !this.props.items 
                    ? <p></p> 
                    : this.props.items.map((result, i) => {
    
                        const name = result.slug.split('-').slice(0, -1).join(" ").toUpperCase();
    
                        return (
                            <div onClick={() => { this.props.itemClick(result.id)}} key={i} style={{ width: 220, height: 200, border: '1px solid #eee', marginBottom: 20, overflow: 'scroll' }}>
                                <img style={{ width: '100%', height: '80%' }} src={result.images.preview_gif.url} />
                                <p style={{ textAlign: 'center', fontWeight: "bold", fontSize:12 }}>{name}</p>
                            </div>
                        )
                    })
                }
                </div>

                { this.props.loading && this.props.items.length > 0 &&  load}
            </div>
        );
    }
}