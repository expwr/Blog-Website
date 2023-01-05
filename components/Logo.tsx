function Logo(props: any) {
    const { renderDefault, title } = props;
  
    return (
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full"
          width={50}
          src="https://images.unsplash.com/photo-1573848953384-3be02021eb0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="logo"
        />
        {renderDefault && <>{renderDefault(props)}</>}
      </div>
    );
  }
  
  export default Logo;