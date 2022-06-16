import React from 'react';
import ChildComponent from './ChildComponents';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '500' },
            { id: 'abcJob2', title: 'Tester', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' },

        ]
    }


    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            //toán từ ... là copy lại trong arrJobs bên trên, job: đẩy dữ liệu vào
            // arrJobs: currentJobs
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run didupdate: ', 'prev state: ', prevState, 'current state: ', this.state)
    }

    componentDidMount() {
        console.log('>>> run component did mount')
    }

    /*
        JSX => return block
        React.Fragment
    */


    //re-render
    render() {
        console.log('>> call render: ', this.state)

        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}

                />
            </>
        )
    }
}

export default MyComponent;