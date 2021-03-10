import Header from "../../base/header"
import React from "react";
import TopHeader from "../../base/header/top-header";
import { withRouter } from "react-router-dom";
import Content from "../../base/content";
import TopHeaderLeft from "../../base/header/top-header/top-header-left";
import TopHeaderRight from "../../base/header/top-header/top-header-right";
import BottomHeader from "../../base/header/bottom-header";
import TextArea from "../../base/header/bottom-header/text-area";
import SearchArea from "../../base/header/bottom-header/search-area";
import Logo from "../../common/logo";
import RelatedLinks from "../../base/footer/related-links";
import CopyWrite from "../../base/footer/copy-write";
import Footer from "../../base/footer";
import AddModal from "../../tools/add-modal";
import AuthModal from "../../../services/auth/auth-modal";
import SearchMovie from "../../common/search-movie";
import { useSelector } from "react-redux";

const PublicLayout = (props) => {
    const {isSearchMovieOpen} = useSelector(state => state.apiReducer);
    return (
        <React.Fragment>
            <Header>
                <TopHeader>
                    <TopHeaderLeft />
                    <TopHeaderRight />
                </TopHeader>
                {isSearchMovieOpen && <SearchMovie />}
                {props.location.pathname === "/" && (
                    <BottomHeader>
                        <TextArea />
                        <SearchArea />
                    </BottomHeader>
                )}
            </Header>
            <Content>
                {props.children}
            </Content>
            <Footer>
                <Logo />
                <RelatedLinks />
                <CopyWrite />
            </Footer>
            <AddModal component={<AuthModal />} />
        </React.Fragment >
    );
}

export default withRouter(PublicLayout);