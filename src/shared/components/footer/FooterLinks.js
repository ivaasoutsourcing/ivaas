import React from "react";
import { contacts } from "../../../data/ContactService";
const FooterLinks = (props) => {
  const important_links = [
    {
      id: "imp1",
      link: "/terms-and-condition",
      title: "Terms & Conditions",
    },
    { id: "imp3", link: "/help-&-support", title: "Help & Support" },
    { id: "imp4", link: "/faq", title: "FAQ" },
    {
      id: "imp5",
      link: "/cancellation-policy",
      title: "Cancellation Policy",
    },
    { id: "imp6", link: "/community", title: "Community & Forum" },
  ];

  const visa_widget = [
    {
      id: 1,
      title: "Canada",
      links: "/",
    },
    {
      id: 2,
      title: "USA",
      links: "/",
    },
    {
      id: 3,
      title: "UK",
      links: "/",
    },
    {
      id: 4,
      title: "Australia",
      links: "/",
    },
    {
      id: 5,
      title: "Germany",
      links: "/",
    },
  ];

  if (props.ImpLinks) {
    return (
      <div className="kilimanjaro_part m-top-15">
        <h5>{props.Title}</h5>
        <ul className="kilimanjaro_links">
          {important_links.map((imp, i) => (
            <li key={"important_link_" + i}>
              <a href={imp.link}>
                <i className="fad fa-angle-right" aria-hidden="true"></i>
                {imp.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (props.VisaWidget) {
    return (
      <div className="kilimanjaro_part">
        <h5>{props.Title}</h5>
        <ul className=" kilimanjaro_widget">
          {visa_widget.map((tag, i) => (
            <li key={"tag_" + i}>
              <a href={tag.links}>{tag.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  //   if (props.LatestBlogs) {
  //     return (
  //       <div className="kilimanjaro_part">
  //         <h5>{props.Title}</h5>
  //         {latest_blogs
  //           .filter((e) => e.isPopular)
  //           .map((blog) => (
  //             <div key={blog.id} className="kilimanjaro_blog_area">
  //               <div className="kilimanjaro_thumb">
  //                 <img className="img-fluid" src={blog.img} alt={blog.alt} />
  //               </div>
  //               <a href={blog.links}>{blog.title}</a>
  //               <p className="kilimanjaro_date">{blog.postDate}</p>
  //               <p
  //                 dangerouslySetInnerHTML={{
  //                   __html: blog.description.substring(0, 59) + "...",
  //                 }}
  //               />
  //             </div>
  //           ))}
  //       </div>
  //     );
  //   }

  if (props.SocialLinks) {
    return (
      <div className="kilimanjaro_part m-top-15">
        <h5>{props.Title}</h5>
        <ul className="kilimanjaro_social_links">
          {contacts.cl_facebook !== "/" && (
            <li>
              <a href={contacts.cl_facebook}>
                <i className="fab fa-facebook" aria-hidden="true"></i> Facebook
              </a>
            </li>
          )}
          {contacts.cl_twitter !== "/" && (
            <li>
              <a href={contacts.cl_twitter}>
                <i className="fab fa-twitter" aria-hidden="true"></i> Twitter
              </a>
            </li>
          )}
          {contacts.cl_youtube !== "/" && (
            <li>
              <a href={contacts.cl_youtube}>
                <i className="fab fa-youtube" aria-hidden="true"></i> YouTube
              </a>
            </li>
          )}
          {contacts.cl_linkedin !== "/" && (
            <li>
              <a href={contacts.cl_linkedin}>
                <i className="fab fa-linkedin" aria-hidden="true"></i> Linkedin
              </a>
            </li>
          )}
          {contacts.cl_instagram !== "/" && (
            <li>
              <a href={contacts.cl_instagram}>
                <i className="fab fa-instagram" aria-hidden="true"></i>{" "}
                Instagram
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }

  if (props.AboutUs) {
    return (
      <div className="kilimanjaro_part">
        <h5>About Us</h5>
        <p>
          The <b>Ivaas Outsourcing </b>is the immigration consultants offering
          visa Service, study visa, investor visa, and immigration to Canada,
          Australia & Germany and other countries as well.
        </p>
      </div>
    );
  }

  if (props.ContactLinks) {
    return (
      <div className="kilimanjaro_part">
        <h5>{props.Title}</h5>
        <div className="kilimanjaro_single_contact_info">
          <h5>Address:</h5>
          <ul className="top-right-info">
            <li className="pb-2">
              <a href="https://goo.gl/maps/s9aD7wwk1VM2" className="text-white">
                <i className="fad fa-map-marked-alt top-nav-icon" />
                &nbsp;Delhi, India
              </a>
            </li>
            <br />
            <li className="pb-2">
              <a href="/" className="text-white">
                <i className="fad fa-map-marked-alt top-nav-icon" />
                &nbsp;Toronto, Canada
              </a>
            </li>
          </ul>
        </div>
        <div className="kilimanjaro_single_contact_info  mt-5">
          <h5>Phone:</h5>
          <ul className="top-right-info">
            <li className="my-1 pb-2">
              <a href={`tell:${contacts.cl_call_alt}`} className="text-white">
                <i className="fad fa-phone-plus top-nav-icon"></i>
                &nbsp;{contacts.cl_call_alt}&nbsp;
              </a>
            </li>
            {", "}
            <li className="my-1 pb-2">
              <a href={`tell:${contacts.cl_call}`} className="text-white">
                <i className="fad fa-phone-plus top-nav-icon"></i>
                &nbsp;{contacts.cl_call}&nbsp;
              </a>
            </li>
            <br />
            <li className="pb-2">
              <a
                href={`https://wa.me/${contacts.cl_whatsapp}?text=Hey! Ivaas Outsourcing, I am interested in your trips`}
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <i className="fab fa-whatsapp top-nav-icon"></i>
                &nbsp;{contacts.cl_whatsapp}
              </a>
            </li>
            {", "}
            <li className="pb-2">
              <a
                href={`https://wa.me/${contacts.cl_whatsapp_alt}?text=Hey! Ivaas Outsourcing, I am interested in your services`}
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <i className="fab fa-whatsapp top-nav-icon"></i>
                &nbsp;{contacts.cl_whatsapp_alt}
              </a>
            </li>
          </ul>
        </div>
        <div className="kilimanjaro_single_contact_info mt-5">
          <h5>Email:</h5>
          <ul className="top-right-info">
            <li className="pb-2">
              <a href={`mailto:${contacts.cl_email}`} className="text-white">
                <i className="fad fa-envelope top-nav-icon"></i>
                &nbsp;{contacts.cl_email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // if (props.LatestTrips) {
  //   return (
  //     <div className="kilimanjaro_part">
  //       <h5>{props.Title}</h5>
  //       <div className="kilimanjaro_works">
  //         {allPlaces
  //           .filter((place) => place.popularTrip)
  //           .map((place, i) => (
  //             <span key={"latest-trip" + i} className="kilimanjaro_works_img">
  //               <Link to={"/trip/" + place.to} onClick={() => AtTheTop()}>
  //                 <img src={place.img} alt="" />
  //               </Link>
  //             </span>
  //           ))}
  //       </div>
  //     </div>
  //   );
  // }
  return null;
};

export default FooterLinks;
