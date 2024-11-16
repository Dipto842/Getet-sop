const Accordion = () => {
  return (
    <div className=" space-y-6 mb-11 w-[1000px] mx-auto ">
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">
        Can I cancel my subscription at anytime?
        </summary>
        <div className="collapse-content">
          <p>Sure. Your paid subscription can be cancelled anytime by shifting to Lite plan.</p>
        </div>
      </details>

      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">
        Can I change my plan later on?
        </summary>
        <div className="collapse-content">
          <p>Absolutely! You can upgrade or downgrade your plan anytime. The money paid for the previous subscription will be recalculated to the new plan.</p>
        </div>
      </details>
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">
        Will you renew my subscription automatically?
        </summary>
        <div className="collapse-content">
          <p>Yes, your subscription will be automatically renewed according to your pay period.</p>
        </div>
      </details>
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">
        Do you offer any discounts?
        </summary>
        <div className="collapse-content">
          <p>Yes! We offer 17% discount for payment per year. There may be other temporary discounts, check for this inside the service.</p>
        </div>
      </details>
    </div>
  );
};

export default Accordion;
