function Logo(props: any) {
    const { renderDefault, title } = props;
  
    return (
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full"
          width={50}
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
          alt="logo"
        />
        {renderDefault && <>{renderDefault(props)}</>}
      </div>
    );
  }
  
  export default Logo;