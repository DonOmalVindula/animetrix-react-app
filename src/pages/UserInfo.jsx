import { useEffect, useState } from "react";
import "../styles/UserInfo.css";
import { getSelfInformation } from "../api/me";
import { Loader } from "../components/Loader";
import { DefaultLayout } from "../layouts/Default";

export const UserInfo = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getSelfInformation()
            .then((response) => {
                console.log("Self information", response);
                setData(response);
            }).catch((error) => {
                console.log("Error occured while fetching self information", error);
            });
    }, []);

    if (!data) {
        return <Loader />;
    }

    return (
        <DefaultLayout>
            <div className="user-info">
                <h1>User Information</h1>
                <div className="section">
                    <h2>Emails</h2>
                    <ul>
                        {data.emails.map((email, index) => (
                            <li key={index}>{email}</li>
                        ))}
                    </ul>
                </div>
                <div className="section">
                    <h2>Meta</h2>
                    <p>
                        <strong>Created:</strong> {data.meta.created}
                    </p>
                    <p>
                        <strong>Location:</strong>{" "}
                        <a href={data.meta.location}>{data.meta.location}</a>
                    </p>
                    <p>
                        <strong>Last Modified:</strong> {data.meta.lastModified}
                    </p>
                    <p>
                        <strong>Resource Type:</strong> {data.meta.resourceType}
                    </p>
                </div>
                <div className="section">
                    <h2>Schemas</h2>
                    <ul>
                        {data.schemas.map((schema, index) => (
                            <li key={index}>{schema}</li>
                        ))}
                    </ul>
                </div>
                <div className="section">
                    <h2>Roles</h2>
                    {data.roles.map((role, index) => (
                        <div key={index} className="role">
                            <p>
                                <strong>Display:</strong> {role.display}
                            </p>
                            <p>
                                <strong>Audience Value:</strong>{" "}
                                {role.audienceValue}
                            </p>
                            <p>
                                <strong>Audience Type:</strong> {role.audienceType}
                            </p>
                            <p>
                                <strong>Value:</strong> {role.value}
                            </p>
                            <p>
                                <strong>Reference:</strong>{" "}
                                <a href={role.$ref}>{role.$ref}</a>
                            </p>
                            <p>
                                <strong>Audience Display:</strong>{" "}
                                {role.audienceDisplay}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="section">
                    <h2>Name</h2>
                    <p>
                        <strong>Given Name:</strong> {data.name.givenName}
                    </p>
                    <p>
                        <strong>Family Name:</strong> {data.name.familyName}
                    </p>
                </div>
                <div className="section">
                    <h2>Groups</h2>
                    {data.groups.map((group, index) => (
                        <div key={index} className="group">
                            <p>
                                <strong>Display:</strong> {group.display}
                            </p>
                            <p>
                                <strong>Value:</strong> {group.value}
                            </p>
                            <p>
                                <strong>Reference:</strong>{" "}
                                <a href={group.$ref}>{group.$ref}</a>
                            </p>
                        </div>
                    ))}
                </div>
                <div className="section">
                    <h2>User Info</h2>
                    <p>
                        <strong>ID:</strong> {data.id}
                    </p>
                    <p>
                        <strong>Username:</strong> {data.userName}
                    </p>
                    <p>
                        <strong>Last Logon Time:</strong>{" "}
                        {data["urn:scim:wso2:schema"].lastLogonTime}
                    </p>
                    <p>
                        <strong>User Source:</strong>{" "}
                        {data["urn:scim:wso2:schema"].userSource}
                    </p>
                    <p>
                        <strong>IDP Type:</strong>{" "}
                        {data["urn:scim:wso2:schema"].idpType}
                    </p>
                    <p>
                        <strong>Is Read-Only User:</strong>{" "}
                        {data["urn:scim:wso2:schema"].isReadOnlyUser}
                    </p>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default UserInfo;
