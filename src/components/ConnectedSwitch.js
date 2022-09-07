import React from 'react'

export default class Switch extends React.Component {

    createDot = () => {
        return <div style={{ height: 15, width: 15, borderRadius: '50%', backgroundColor: this.props.on ? '#FFFF00' : '#000080' }} />
    }

    render() {
        return (
            <div onClick={() => this.props.flip()} style={{ backgroundColor: '#dddddd', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, height: 25, width: 50 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                    {this.props.on && this.createDot()}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                    {!this.props.on && this.createDot()}
                </div>
            </div>
        )
    }
}