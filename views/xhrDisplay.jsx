class XHRDisplay extends React.component{
    render(){
        return (<div>
            <input type='button' value='click' onclick={this.loadData()} />
            <div>{this.renderXHRList()}</div>
        </div>)
    }
    loadData(){
        this.state.xhrList = this.state.xhrList ||[]



                            this.state.xhrList.push()
    }
    renderXHRList(){
        return (this.state.xhrList||[]).map((member)=>(
            <div>{member.name}</div>
        ))
    }
}