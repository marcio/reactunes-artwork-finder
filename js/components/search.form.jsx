var React = require("react");
var ArtworkAction = require('../actions/artwork.actions');

var SearchForm = React.createClass({
    handlerSubmit: function(e) {
        ArtworkAction.clearResult();
        e.preventDefault();
        var entity = this.refs.entity.getDOMNode().value.trim();
        var term = this.refs.term.getDOMNode().value.trim();
        var country = this.refs.country.getDOMNode().value.trim();
        var query = {entity: entity, country: country, term: term};

        ArtworkAction.search(query);
        console.log(query);

    },

    componentDidMount: function(){
        $(this.refs.entityDropDown.getDOMNode()).dropdown();
        $(this.refs.countryDropDown.getDOMNode()).dropdown();
    },

    render: function () {
        return (

            <div className="ui form segment">
                <form onSubmit={this.handlerSubmit}>
                    <div className="four fields">
                        <div className="field">
                            <div className="ui fluid search selection dropdown" ref="entityDropDown" >
                                <input type="hidden" ref="entity" />
                                <i className="dropdown icon"></i>
                                <div className="default text">Select Type</div>
                                <div className="menu">
                                    <div className="item" data-value="movie"><i className="film icon"></i>Movie</div>
                                    <div className="item" data-value="album"><i className="music icon"></i>Album</div>
                                    <div className="item" data-value="tvSeason"><i className="record icon"></i>TV Show</div>
                                    <div className="item" data-value="ebook"><i className="book icon"></i>iBook</div>
                                    <div className="item" data-value="id"><i className="apple icon"></i>Apple ID (Movies)</div>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <div className="ui fluid search selection dropdown" ref="countryDropDown" >
                                <input type="hidden" ref="country" />
                                <i className="dropdown icon"></i>
                                <div className="default text">Select Country</div>
                                <div className="menu">
                                    <div className="item" data-value="us"><i className="us flag"></i>USA</div>
                                    <div className="item" data-value="gb"><i className="gb flag"></i>UK</div>
                                    <div className="item" data-value="al"><i className="al flag"></i>Albania</div>
                                    <div className="item" data-value="dz"><i className="dz flag"></i>Algeria</div>
                                    <div className="item" data-value="ao"><i className="ao flag"></i>Angola</div>
                                    <div className="item" data-value="ai"><i className="ai flag"></i>Anguilla</div>
                                    <div className="item" data-value="ag"><i className="ag flag"></i>Antigua and Barbuda</div>
                                    <div className="item" data-value="ar"><i className="ar flag"></i>Argentina</div>
                                    <div className="item" data-value="am"><i className="am flag"></i>Armenia</div>
                                    <div className="item" data-value="au"><i className="au flag"></i>Australia</div>
                                    <div className="item" data-value="at"><i className="at flag"></i>Austria</div>
                                    <div className="item" data-value="az"><i className="az flag"></i>Azerbaijan</div>
                                    <div className="item" data-value="bs"><i className="bs flag"></i>Bahamas</div>
                                    <div className="item" data-value="bh"><i className="bh flag"></i>Bahrain</div>
                                    <div className="item" data-value="bb"><i className="bb flag"></i>Barbados</div>
                                    <div className="item" data-value="by"><i className="by flag"></i>Belarus</div>
                                    <div className="item" data-value="be"><i className="be flag"></i>Belgium</div>
                                    <div className="item" data-value="bz"><i className="bz flag"></i>Belize</div>
                                    <div className="item" data-value="bj"><i className="bj flag"></i>Benin</div>
                                    <div className="item" data-value="bm"><i className="bm flag"></i>Bermuda</div>
                                    <div className="item" data-value="bt"><i className="bt flag"></i>Bhutan</div>
                                    <div className="item" data-value="bo"><i className="bo flag"></i>Bolivia</div>
                                    <div className="item" data-value="bw"><i className="bw flag"></i>Botswana</div>
                                    <div className="item" data-value="br"><i className="br flag"></i>Brazil</div>
                                    <div className="item" data-value="vg"><i className="vg flag"></i>British Virgin Islands</div>
                                    <div className="item" data-value="bn"><i className="bn flag"></i>Brunei Darussalam</div>
                                    <div className="item" data-value="bg"><i className="bg flag"></i>Bulgaria</div>
                                    <div className="item" data-value="bf"><i className="bf flag"></i>Burkina-Faso</div>
                                    <div className="item" data-value="kh"><i className="kh flag"></i>Cambodia</div>
                                    <div className="item" data-value="ca"><i className="ca flag"></i>Canada</div>
                                    <div className="item" data-value="cv"><i className="cv flag"></i>Cape Verde</div>
                                    <div className="item" data-value="ky"><i className="ky flag"></i>Cayman Islands</div>
                                    <div className="item" data-value="td"><i className="td flag"></i>Chad</div>
                                    <div className="item" data-value="cl"><i className="cl flag"></i>Chile</div>
                                    <div className="item" data-value="cn"><i className="cn flag"></i>China</div>
                                    <div className="item" data-value="co"><i className="co flag"></i>Colombia</div>
                                    <div className="item" data-value="cr"><i className="cr flag"></i>Costa Rica</div>
                                    <div className="item" data-value="hr"><i className="hr flag"></i>Croatia</div>
                                    <div className="item" data-value="cy"><i className="cy flag"></i>Cyprus</div>
                                    <div className="item" data-value="cz"><i className="cz flag"></i>Czech Republic</div>
                                    <div className="item" data-value="cg"><i className="cg flag"></i>Democratic Republic of the Congo</div>
                                    <div className="item" data-value="dk"><i className="dk flag"></i>Denmark</div>
                                    <div className="item" data-value="dm"><i className="dm flag"></i>Dominica</div>
                                    <div className="item" data-value="do"><i className="do flag"></i>Dominican Republic</div>
                                    <div className="item" data-value="ec"><i className="ec flag"></i>Ecuador</div>
                                    <div className="item" data-value="eg"><i className="eg flag"></i>Egypt</div>
                                    <div className="item" data-value="sv"><i className="sv flag"></i>El Salvador</div>
                                    <div className="item" data-value="ee"><i className="ee flag"></i>Estonia</div>
                                    <div className="item" data-value="fm"><i className="fm flag"></i>Federated States of Micronesia</div>
                                    <div className="item" data-value="fj"><i className="fj flag"></i>Fiji</div>
                                    <div className="item" data-value="fi"><i className="fi flag"></i>Finland</div>
                                    <div className="item" data-value="fr"><i className="fr flag"></i>France</div>
                                    <div className="item" data-value="gm"><i className="gm flag"></i>Gambia</div>
                                    <div className="item" data-value="de"><i className="de flag"></i>Germany</div>
                                    <div className="item" data-value="gh"><i className="gh flag"></i>Ghana</div>
                                    <div className="item" data-value="gr"><i className="gr flag"></i>Greece</div>
                                    <div className="item" data-value="gd"><i className="gd flag"></i>Grenada</div>
                                    <div className="item" data-value="gt"><i className="gt flag"></i>Guatemala</div>
                                    <div className="item" data-value="gw"><i className="gw flag"></i>Guinea Bissau</div>
                                    <div className="item" data-value="gy"><i className="gy flag"></i>Guyana</div>
                                    <div className="item" data-value="hn"><i className="hn flag"></i>Honduras</div>
                                    <div className="item" data-value="hk"><i className="hk flag"></i>Hong Kong</div>
                                    <div className="item" data-value="hu"><i className="hu flag"></i>Hungaria</div>
                                    <div className="item" data-value="is"><i className="is flag"></i>Iceland</div>
                                    <div className="item" data-value="in"><i className="in flag"></i>India</div>
                                    <div className="item" data-value="id"><i className="id flag"></i>Indonesia</div>
                                    <div className="item" data-value="ie"><i className="ie flag"></i>Ireland</div>
                                    <div className="item" data-value="il"><i className="il flag"></i>Israel</div>
                                    <div className="item" data-value="it"><i className="it flag"></i>Italy</div>
                                    <div className="item" data-value="jm"><i className="jm flag"></i>Jamaica</div>
                                    <div className="item" data-value="jp"><i className="jp flag"></i>Japan</div>
                                    <div className="item" data-value="jo"><i className="jo flag"></i>Jordan</div>
                                    <div className="item" data-value="kz"><i className="kz flag"></i>Kazakhstan</div>
                                    <div className="item" data-value="ke"><i className="ke flag"></i>Kenya</div>
                                    <div className="item" data-value="kg"><i className="kg flag"></i>Krygyzstan</div>
                                    <div className="item" data-value="kw"><i className="kw flag"></i>Kuwait</div>
                                    <div className="item" data-value="la"><i className="la flag"></i>Laos</div>
                                    <div className="item" data-value="lv"><i className="lv flag"></i>Latvia</div>
                                    <div className="item" data-value="lb"><i className="lb flag"></i>Lebanon</div>
                                    <div className="item" data-value="lr"><i className="lr flag"></i>Liberia</div>
                                    <div className="item" data-value="lt"><i className="lt flag"></i>Lithuania</div>
                                    <div className="item" data-value="lu"><i className="lu flag"></i>Luxembourg</div>
                                    <div className="item" data-value="mo"><i className="mo flag"></i>Macau</div>
                                    <div className="item" data-value="mk"><i className="mk flag"></i>Macedonia</div>
                                    <div className="item" data-value="mg"><i className="mg flag"></i>Madagascar</div>
                                    <div className="item" data-value="mw"><i className="mw flag"></i>Malawi</div>
                                    <div className="item" data-value="my"><i className="my flag"></i>Malaysia</div>
                                    <div className="item" data-value="ml"><i className="ml flag"></i>Mali</div>
                                    <div className="item" data-value="mt"><i className="mt flag"></i>Malta</div>
                                    <div className="item" data-value="mr"><i className="mr flag"></i>Mauritania</div>
                                    <div className="item" data-value="mu"><i className="mu flag"></i>Mauritius</div>
                                    <div className="item" data-value="mx"><i className="mx flag"></i>Mexico</div>
                                    <div className="item" data-value="md"><i className="md flag"></i>Moldova</div>
                                    <div className="item" data-value="mn"><i className="mn flag"></i>Mongolia</div>
                                    <div className="item" data-value="ms"><i className="ms flag"></i>Montserrat</div>
                                    <div className="item" data-value="mz"><i className="mz flag"></i>Mozambique</div>
                                    <div className="item" data-value="na"><i className="na flag"></i>Namibia</div>
                                    <div className="item" data-value="np"><i className="np flag"></i>Nepal</div>
                                    <div className="item" data-value="nl"><i className="nl flag"></i>Netherlands</div>
                                    <div className="item" data-value="nz"><i className="nz flag"></i>New Zealanddivon</div>
                                    <div className="item" data-value="ni"><i className="ni flag"></i>Nicaragua</div>
                                    <div className="item" data-value="ne"><i className="ne flag"></i>Niger</div>
                                    <div className="item" data-value="ng"><i className="ng flag"></i>Nigeria</div>
                                    <div className="item" data-value="no"><i className="no flag"></i>Norway</div>
                                    <div className="item" data-value="om"><i className="om flag"></i>Oman</div>
                                    <div className="item" data-value="pk"><i className="pk flag"></i>Pakistan</div>
                                    <div className="item" data-value="pw"><i className="pw flag"></i>Palau</div>
                                    <div className="item" data-value="pa"><i className="pa flag"></i>Panama</div>
                                    <div className="item" data-value="pg"><i className="pg flag"></i>Papua New Guinea</div>
                                    <div className="item" data-value="py"><i className="py flag"></i>Paraguay</div>
                                    <div className="item" data-value="pe"><i className="pe flag"></i>Peru</div>
                                    <div className="item" data-value="ph"><i className="ph flag"></i>Philippines</div>
                                    <div className="item" data-value="pl"><i className="pl flag"></i>Poland</div>
                                    <div className="item" data-value="pt"><i className="pt flag"></i>Portugal</div>
                                    <div className="item" data-value="qa"><i className="qa flag"></i>Qatar</div>
                                    <div className="item" data-value="tt"><i className="tt flag"></i>Republic of Trinidad and Tobago</div>
                                    <div className="item" data-value="ro"><i className="ro flag"></i>Romania</div>
                                    <div className="item" data-value="ru"><i className="ru flag"></i>Russia</div>
                                    <div className="item" data-value="kn"><i className="kn flag"></i>Saint Kitts and Nevis</div>
                                    <div className="item" data-value="lc"><i className="lc flag"></i>Saint Lucia</div>
                                    <div className="item" data-value="vc"><i className="vc flag"></i>Saint Vincent and the Grenadines</div>
                                    <div className="item" data-value="st"><i className="st flag"></i>Sao Tome e Principe</div>
                                    <div className="item" data-value="sa"><i className="sa flag"></i>Saudi Arabia</div>
                                    <div className="item" data-value="sn"><i className="sn flag"></i>Senegal</div>
                                    <div className="item" data-value="sc"><i className="sc flag"></i>Seychelles</div>
                                    <div className="item" data-value="sl"><i className="sl flag"></i>Sierra Leone</div>
                                    <div className="item" data-value="sg"><i className="sg flag"></i>Singapore</div>
                                    <div className="item" data-value="sk"><i className="sk flag"></i>Slovakia</div>
                                    <div className="item" data-value="si"><i className="si flag"></i>Slovenia</div>
                                    <div className="item" data-value="sb"><i className="sb flag"></i>Soloman Islands</div>
                                    <div className="item" data-value="za"><i className="za flag"></i>South Africa</div>
                                    <div className="item" data-value="kr"><i className="kr flag"></i>South Korea</div>
                                    <div className="item" data-value="es"><i className="es flag"></i>Spain</div>
                                    <div className="item" data-value="lk"><i className="lk flag"></i>Sri Lanka</div>
                                    <div className="item" data-value="sr"><i className="sr flag"></i>Suriname</div>
                                    <div className="item" data-value="sz"><i className="sz flag"></i>Swaziland</div>
                                    <div className="item" data-value="se"><i className="se flag"></i>Sweden</div>
                                    <div className="item" data-value="ch"><i className="ch flag"></i>Switzerland</div>
                                    <div className="item" data-value="tw"><i className="tw flag"></i>Taiwan</div>
                                    <div className="item" data-value="tj"><i className="tj flag"></i>Tajikistan</div>
                                    <div className="item" data-value="tz"><i className="tz flag"></i>Tanzania</div>
                                    <div className="item" data-value="th"><i className="th flag"></i>Thailand</div>
                                    <div className="item" data-value="tn"><i className="tn flag"></i>Tunisia</div>
                                    <div className="item" data-value="tr"><i className="tr flag"></i>Turkey</div>
                                    <div className="item" data-value="tm"><i className="tm flag"></i>Turkmenistan</div>
                                    <div className="item" data-value="tc"><i className="tc flag"></i>Turks and Caicos Islands</div>
                                    <div className="item" data-value="ug"><i className="ug flag"></i>Uganda</div>
                                    <div className="item" data-value="ua"><i className="ua flag"></i>Ukraine</div>
                                    <div className="item" data-value="ae"><i className="ae flag"></i>United Arab Emirates</div>
                                    <div className="item" data-value="gb"><i className="gb flag"></i>United Kingdom</div>
                                    <div className="item" data-value="us"><i className="us flag"></i>United States of America</div>
                                    <div className="item" data-value="uy"><i className="uy flag"></i>Uruguay</div>
                                    <div className="item" data-value="uz"><i className="uz flag"></i>Uzbekistan</div>
                                    <div className="item" data-value="ve"><i className="ve flag"></i>Venezuela</div>
                                    <div className="item" data-value="vn"><i className="vn flag"></i>Vietnam</div>
                                    <div className="item" data-value="ye"><i className="ye flag"></i>Yemen</div>
                                    <div className="item" data-value="zw"><i className="zw flag"></i>Zimbabwe</div>
                                </div>
                            </div>
                        </div>

                        <div className="field input">
                            <input type="text" ref="term" placeholder="Term"/>
                        </div>

                        <div className="field">
                            <button className="fluid ui teal button">Search</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
});

module.exports = SearchForm;