import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Parents</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">20</span>
          <span className="featuredMoneyRate">
            <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Childrens</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">40</span>
          <span className="featuredMoneyRate">
             <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Drivers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2</span>
          <span className="featuredMoneyRate">
            <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
