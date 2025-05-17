
import NavBar from "../components/navbar";

function Home({isProfileActive}) {
    if(!isProfileActive){
        return(
            <>
                <NavBar />
                <div class="container-fluid">
                    <ul className="nav nav-tabs m-3 nav-pills" role="tablist">
                        <li className="nav-item">
                           <a className="nav-link active"
                              data-bs-toggle="tab" 
                              href="#personal_information" 
                              aria-selected="true"
                              role="tab">پروفايل اصلي </a> 
                        </li>
                        <li className="nav-item">
                           <a className="nav-link"
                              data-bs-toggle="tab" 
                              href="#additional_information" 
                              aria-selected="false"
                              role="tab">اطلاعات تكميلي</a> 
                        </li>
                    </ul>
                    <div className="tab-content m-3" id="myTabContent">
                        <div className="tab-pane fade show active" 
                             id="personal_information"
                             role="tabpanel">
                                اين تب مربوط به اطلاعات هويتي است
                             </div>
                    </div>
                    <div className="tab-content m-3" id="myTabContent">
                        <div className="tab-pane fade" 
                             id="additional_information"
                             role="tabpanel">
                               اين تب مربوط به اطلاعات اضافه است
                             </div>
                    </div>                    
                </div>
            </>
        )
    }else{
        return(
            <>
                <NavBar /> 
                <div className="container-fluid">
                    <ul className="nav nav-tabs" role="tablist">

                    </ul>
                </div>
            </>
        )
    }
}

export default Home;