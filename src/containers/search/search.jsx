import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { findFavorites } from '../../actions/search.actions';
import StarRatingComponent from 'react-star-rating-component';

class Search extends Component {
    componentDidMount() {
        if (this.props.loggedIn) {
            this.props.findFavorites(this.props.recordType, this.props.currentUserId);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.loggedIn) {
            if (prevProps.recordType !== this.props.recordType) {
                this.props.findFavorites(this.props.recordType, this.props.currentUserId);
            }
        }
    }

    renderResults() {
        if (this.props.records.length > 0) {
            return this.props.records.map((record) => {
                switch (this.props.recordType) {
                    case 'person':
                        return <PersonRecord key={record.id} person={record}/>
                    case 'object':
                        return <ObjectRecord key={record.id} object={record}/>
                    case 'publication':
                        return <PublicationRecord key={record.id} publication={record}/>
                    case 'exhibition':
                        return <ExhibitionRecord key={record.id} exhibition={record}/>
                    case 'gallery':
                        return <GalleryRecord key={record.id} gallery={record}/>
                    default:
                        return null;
                }
            })
        } else {
            return <p>No records found!</p>
        }
    }

    render() {
        return (
            <div>
                <PageHeader style={{marginTop: 60}}>
                    Results for '{this.props.query}' <small>type: {this.props.recordType}</small>
                </PageHeader>
                {this.renderResults()}
            </div>
        )
    }
}

const PersonRecord = ({person}) => {
    return (
        <Panel>
            <Panel.Heading>
                <a style={{fontSize: 20, fontWeight: 'bold'}} href={person.url} target="_blank">{person.displayname}</a>
                <span className="star" title="Favorite">
                    <StarRatingComponent
                        name={person.id + "-stars"}
                        value={person.favorite ? 1 : 0}
                        starCount={1}
                        emptyStarColor="rgb(177, 175, 175)"/>
                </span>
            </Panel.Heading>
            <Panel.Body>
                <ListGroup>
                    {person.datebegin > 0 &&
                        <ListGroupItem header="Birth">
                            {person.datebegin} in {person.birthplace}
                        </ListGroupItem>
                    }
                    {person.dateend > 0 &&
                        <ListGroupItem header="Death">
                            {person.dateend} in {person.deathplace}
                        </ListGroupItem>
                    }
                    {person.culture &&
                        <ListGroupItem header="Culture">
                            {person.culture}
                        </ListGroupItem>
                    }
                    <ListGroupItem header="URL">
                        <a href={person.url} target="_blank">{person.url}</a>
                    </ListGroupItem>
                </ListGroup>
            </Panel.Body>
        </Panel>
    )
};

class ObjectRecord extends Component {
    getArtist() {
        if (this.props.object.people) {
            let artist = this.props.object.people.filter(p => (
                p.role === 'Artist'
            ));
            if (artist.length > 0) {
                return artist[0].displayname;
            }
        }
        return null;
    }

    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <a style={{fontSize: 20, fontWeight: 'bold'}} href={this.props.object.url} target="_blank">{this.props.object.title}</a>
                </Panel.Heading>
                <Panel.Body>
                    <ListGroup>
                        {this.getArtist() &&
                            <ListGroupItem header="Artist">
                                {this.getArtist()}
                            </ListGroupItem>
                        }
                        {this.props.object.datebegin > 0 &&
                            <ListGroupItem header="Year Began">
                                {this.props.object.datebegin}
                            </ListGroupItem>
                        }
                        {this.props.object.dateend > 0 &&
                            <ListGroupItem header="Year Finished">
                                {this.props.object.dateend}
                            </ListGroupItem>
                        }
                        {this.props.object.medium &&
                            <ListGroupItem header="Medium">
                                {this.props.object.medium}
                            </ListGroupItem>
                        }
                        {this.props.object.culture &&
                            <ListGroupItem header="Culture">
                                {this.props.object.culture}
                            </ListGroupItem>
                        }
                        {this.props.object.division &&
                            <ListGroupItem header="Division">
                                {this.props.object.division}
                            </ListGroupItem>
                        }
                        {this.props.object.department &&
                            <ListGroupItem header="Department">
                                {this.props.object.department}
                            </ListGroupItem>
                        }
                        <ListGroupItem header="URL">
                            <a href={this.props.object.url} target="_blank">{this.props.object.url}</a>
                        </ListGroupItem>
                    </ListGroup>
                </Panel.Body>
            </Panel>
        )
    }
};

class PublicationRecord extends Component {
    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <a style={{fontSize: 20, fontWeight: 'bold'}} href={this.props.publication.url} target="_blank">{this.props.publication.title}</a>
                </Panel.Heading>
                <Panel.Body>
                    <ListGroup>
                        {this.props.publication.people &&
                            this.props.publication.people.map((p) => {
                                return (
                                    <ListGroupItem key={p.personid} header={p.role}>
                                        {p.name}
                                    </ListGroupItem>
                                )
                        })}
                        {this.props.publication.publicationyear > 0 &&
                            <ListGroupItem header="Publication Year">
                                {this.props.publication.publicationyear}
                            </ListGroupItem>
                        }
                        {this.props.publication.publicationplace &&
                            <ListGroupItem header="Publication Place">
                                {this.props.publication.publicationplace}
                            </ListGroupItem>
                        }
                        {this.props.publication.format &&
                            <ListGroupItem header="Format">
                                {this.props.publication.format}
                            </ListGroupItem>
                        }
                        {this.props.publication.description &&
                            <ListGroupItem header="Description">
                                {this.props.publication.description}
                            </ListGroupItem>
                        }
                    </ListGroup>
                </Panel.Body>
            </Panel>
        )
    }
}

class ExhibitionRecord extends Component {
    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <a style={{fontSize: 20, fontWeight: 'bold'}} href={this.props.exhibition.url} target="_blank">{this.props.exhibition.title}</a>
                </Panel.Heading>
                <Panel.Body>
                    <ListGroup>
                        {this.props.exhibition.venues &&
                            this.props.exhibition.venues.map((e) => {
                                return (
                                    <ListGroupItem key={e.venueid} header="Venue">
                                        {e.fullname}
                                    </ListGroupItem>
                                )
                        })}
                        {this.props.exhibition.begindate > 0 &&
                            <ListGroupItem header="Begin Date">
                                {this.props.exhibition.begindate}
                            </ListGroupItem>
                        }
                        {this.props.exhibition.enddate &&
                            <ListGroupItem header="End Date">
                                {this.props.exhibition.enddate}
                            </ListGroupItem>
                        }
                        {this.props.exhibition.description &&
                            <ListGroupItem header="Description">
                                {this.props.exhibition.description}
                            </ListGroupItem>
                        }
                        {this.props.exhibition.url &&
                            <ListGroupItem header="URL">
                                <a href={this.props.exhibition.url} target="_blank">{this.props.exhibition.url}</a>
                            </ListGroupItem>
                        }
                    </ListGroup>
                </Panel.Body>
            </Panel>
        )
    }
}

class GalleryRecord extends Component {
    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <a style={{fontSize: 20, fontWeight: 'bold'}} href={this.props.gallery.url} target="_blank">{this.props.gallery.name}</a>
                </Panel.Heading>
                <Panel.Body>
                    <ListGroup>
                        {this.props.gallery.theme &&
                            <ListGroupItem header="Theme">
                                {this.props.gallery.theme}
                            </ListGroupItem>
                        }
                        {this.props.gallery.labeltext &&
                            <ListGroupItem header="Description">
                                {this.props.gallery.labeltext}
                            </ListGroupItem>
                        }
                        {this.props.gallery.floor &&
                            <ListGroupItem header="Floor">
                                {this.props.gallery.floor}
                            </ListGroupItem>
                        }
                        {this.props.gallery.url &&
                            <ListGroupItem header="URL">
                                <a href={this.props.gallery.url} target="_blank">{this.props.gallery.url}</a>
                            </ListGroupItem>
                        }
                    </ListGroup>
                </Panel.Body>
            </Panel>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    records: state.searchReducer.records,
    query: state.searchReducer.query,
    recordType: state.searchReducer.recordType,
    errorMsg: state.searchReducer.errorMsg,
    loggedIn: state.authReducer.loggedIn,
    currentUserId: state.authReducer.user._id
});

const dispatcherToPropsMapper = dispatch => ({
    findFavorites: (recordType, userId) => findFavorites(dispatch, recordType, userId)
});

const connectedSearchPage = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(Search);

export { connectedSearchPage as Search };