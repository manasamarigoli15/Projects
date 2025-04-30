import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { addNewProperty } from "../services/propertyservice";
import { uploadMultiple } from "../services/upload";
import "../assets/css/addproperty.css";

function AddPropertyComponent() {
    let [property, setproperty] = useState({});
    let nav = useHistory();

    function onPropertyCreate() {
        let newfiles = uploadMultiple();
        newfiles.then(d => {
            property.Images = [];
            for (var image of d) {
                property.Images.push({ ImageUrl: image });
            }
            property.categoryType = parseInt(property.categoryType);
            property.featured = parseInt(property.featured);
            property.propertyStatus = parseInt(property.propertyStatus);
            addNewProperty(property)
                .then((response) => {
                    console.debug(response.data);
                    alert("New Property Added Successfully !");
                    nav.push("/viewproperty");
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }

    return (
        <div className="addproperty-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>

            <div className="content">
                <h2 className="mt-4 text-center">Add New Property</h2>
                <hr className="mt-5"></hr>
                <h4>Property Details</h4><hr></hr>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Property Reg.Num</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Property Register Number"
                                    onChange={(e) => { setproperty({ ...property, propertyregnum: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label className="mb-2" for=""><b>Property Type</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="1 BHK or 2 BHK or 3BHK"
                                    onChange={(e) => { setproperty({ ...property, propertytype: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Area in Sqft</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Area in sqft"
                                    onChange={(e) => { setproperty({ ...property, areaSqft: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Furnished Status</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Furnished status"
                                    onChange={(e) => { setproperty({ ...property, furnishedStatus: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Number of floors</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Number of floors"
                                    onChange={(e) => { setproperty({ ...property, numberOfFloors: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Property Age</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Property Age"
                                    onChange={(e) => { setproperty({ ...property, propertyAge: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Price</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Property Price"
                                    onChange={(e) => { setproperty({ ...property, price: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>City</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="City"
                                    onChange={(e) => { setproperty({ ...property, city: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Location</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Location"
                                    onChange={(e) => { setproperty({ ...property, location: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Category</b></label>
                                <select
                                    className="form-select"
                                    placeholder="Author Name"
                                    onChange={(e) => { setproperty({ ...property, categoryType: e.target.value }) }}
                                >
                                    <option value="-1">Select Category</option>
                                    <option value="1">Buy</option>
                                    <option value="2">Sell</option>
                                    <option value="3">Rent</option>
                                </select>
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Want to make it Featured?</b></label>
                                <select
                                    className="form-select"
                                    placeholder=""
                                    onChange={(e) => { setproperty({ ...property, featured: e.target.value }) }}
                                >
                                    <option value="-1">Select Yes or No</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>

                                </select>
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Property Status</b></label>
                                <select
                                    className="form-select"
                                    placeholder=""
                                    onChange={(e) => { setproperty({ ...property, propertyStatus: e.target.value }) }}
                                >
                                    <option value="-1">Select Property Status</option>
                                    <option value="1">Requested</option>
                                    <option value="0">Not Requested</option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-6">
                                <label for="" className="mb-2"><b>Address</b></label>
                                <textarea type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    onChange={(e) => { setproperty({ ...property, address: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-5 ms-5">
                                <label for="" className="mt-3  mb-2"><b>Choose Images</b></label>
                                <input type="file" id="file"
                                    className="form-control"
                                    placeholder="Images"
                                    // onChange={(e) => { setproperty({ ...property, images: e.target.value }) }}
                                    required multiple />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-10">
                                <label for="" className="mb-2"><b>Property Description</b></label>
                                <textarea type="text"
                                    className="form-control"
                                    placeholder="Property Description"
                                    onChange={(e) => { setproperty({ ...property, description: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-5"></hr>
                <h4>Agency Details</h4><hr></hr>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-5">
                                <label for="" className="mb-2"><b>Agency Id</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Agency Id"
                                    onChange={(e) => { setproperty({ ...property, agencyId: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-5 ms-5">
                                <label for="" className="mb-2"><b>Agency Name</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Agency Name"
                                    onChange={(e) => { setproperty({ ...property, agencyName: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-5">
                                <label for="" className="mb-2"><b>Agency Phone Number</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Agency Phone Number"
                                    onChange={(e) => { setproperty({ ...property, agencyPhoneNumber: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-5 ms-5">
                                <label for="" className="mb-2"><b>Agency Address</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Agency Address"
                                    onChange={(e) => { setproperty({ ...property, agencyAddress: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-5"></hr>
                <div className="row mt-4">
                    <div className="col-12">
                        <Link to="/dashboard" className="btn btn-warning ms-4 float-end">Cancel</Link>
                        <button type="button" onClick={onPropertyCreate} className="btn btn-primary float-end">Save Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPropertyComponent;
