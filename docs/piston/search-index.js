var searchIndex = {};
searchIndex['piston'] = {"items":[[0,"","piston","A user friendly graphics engine."],[1,"GameIterator","","A game loop iterator."],[11,"game_window","","",0],[11,"state","","",0],[11,"gl","","",0],[11,"audio","","",0],[11,"bg_color","","",0],[11,"last_update","","",0],[11,"update_time_in_ns","","",0],[11,"dt","","",0],[11,"min_updates_per_frame","","",0],[11,"min_ns_per_frame","","",0],[11,"start_render","","",0],[11,"next_render","","",0],[11,"updated","","",0],[1,"GameIteratorSettings","","Settings for the game loop behavior."],[11,"updates_per_second","","The number of updates per second (UPS).",1],[11,"max_frames_per_second","","The maximum number of frames per second (FPS target).",1],[1,"RenderArgs","","Render argument."],[11,"ext_dt","","Extrapolated time in seconds, used to do smooth animation.",2],[11,"gl","","OpenGL back-end for Rust-Graphics.",2],[11,"width","","The width of rendered area.",2],[11,"height","","The height of rendered area.",2],[1,"UpdateArgs","","Update argument."],[11,"dt","","Delta time in seconds.",3],[11,"audio","","SDL2 audio back-end",3],[1,"KeyPressArgs","","Key press arguments."],[11,"key","","Keyboard key.",4],[1,"KeyReleaseArgs","","Key release arguments."],[11,"key","","Keyboard key.",5],[1,"MousePressArgs","","Mouse press arguments."],[11,"button","","Mouse button.",6],[1,"MouseReleaseArgs","","Mouse release arguments."],[11,"button","","Mouse button.",7],[1,"MouseMoveArgs","","Mouse move arguments."],[11,"x","","y.",8],[11,"y","","x.",8],[1,"MouseRelativeMoveArgs","","Mouse relative move arguments."],[11,"dx","","Delta x.",9],[11,"dy","","Delta y.",9],[1,"GameWindowSDL2","","A widow implemented by SDL2 back-end."],[11,"window","","",10],[11,"context","","",10],[11,"settings","","",10],[11,"should_close","","",10],[11,"last_pressed_key","","",10],[1,"GameWindowGLFW","","Contains stuff for game window."],[11,"window","","The window.",11],[11,"events","","Receives events from window.",11],[11,"glfw","","GLFW context.",11],[11,"settings","","Game window settings.",11],[11,"event_queue","","",11],[1,"GameWindowSettings","","Settings for window behavior."],[11,"title","","Title of the window.",12],[11,"size","","The size of the window",12],[11,"fullscreen","","If true, the window is fullscreen.",12],[11,"exit_on_esc","","If true, exit when pressing Esc.",12],[11,"background_color","","The background color.",12],[1,"Gl","","Contains OpenGL data."],[11,"tri_list_xy_rgba","","",13],[11,"tri_list_xy_rgba_uv","","",13],[11,"position_id","","",13],[11,"fill_color_id","","",13],[11,"tex_coord_id","","",13],[11,"current_program","","",13],[1,"AssetStore","","A place to store sounds, textures, animations etc."],[11,"assets_folder","","",14],[1,"Texture","","Wraps OpenGL texture data.\nThe texture gets deleted when running out of scope."],[11,"id","","",15],[11,"width","","",15],[11,"height","","",15],[1,"AudioSDL2","","An audio back end using SDL2_mixer"],[1,"MusicSDL2","","Wraps SDL2_mixer music data."],[11,"music","","",16],[11,"loops","","",16],[1,"SoundSDL2","","Wraps SDL2_mixer chunk data."],[11,"chunk","","",17],[11,"loops","","",17],[2,"GameEvent","","Contains the different game events."],[12,"Render","","Render graphics.",18],[12,"Update","","Update physical state of the game.",18],[12,"KeyPress","","Pressed a keyboard key.",18],[12,"KeyRelease","","Released a keyboard key.",18],[12,"MousePress","","Pressed a mouse button.",18],[12,"MouseRelease","","Released a mouse button.",18],[12,"MouseMove","","Moved mouse cursor.",18],[12,"MouseRelativeMove","","Moved mouse relative, not bounded by cursor.",18],[0,"shader_utils","","Helper functions for dealing with shaders."],[3,"compile_shader","piston::shader_utils","Compiles a vertex shader from file and fails if not succeeding.\nReads a shader file and creates data required to compile.\nCompiles a shader.\nReturns a shader or a message with the error."],[0,"game_window","piston","A trait for window operations."],[6,"GameWindow","piston::game_window","Implemented by window back-end."],[9,"new","","Creates a window.",19],[9,"get_settings","","Get the window's settings.",19],[9,"should_close","","Returns ture if the window should close.",19],[10,"get_size","","Get the window's size",19],[10,"swap_buffers","","If window support double buffers, called this to tell implementation\nswap buffers.",19],[10,"poll_event","","Poll a event from window's event queue.",19],[0,"keyboard","piston","Back-end agnostic keyboard keys."],[2,"Key","piston::keyboard","Represent a keyboard key."],[12,"Unknown","","",20],[12,"Backspace","","",20],[12,"Tab","","",20],[12,"Return","","",20],[12,"Escape","","",20],[12,"Space","","",20],[12,"Exclaim","","",20],[12,"Quotedbl","","",20],[12,"Hash","","",20],[12,"Dollar","","",20],[12,"Percent","","",20],[12,"Ampersand","","",20],[12,"Quote","","",20],[12,"LeftParen","","",20],[12,"RightParen","","",20],[12,"Asterisk","","",20],[12,"Plus","","",20],[12,"Comma","","",20],[12,"Minus","","",20],[12,"Period","","",20],[12,"Slash","","",20],[12,"D0","","",20],[12,"D1","","",20],[12,"D2","","",20],[12,"D3","","",20],[12,"D4","","",20],[12,"D5","","",20],[12,"D6","","",20],[12,"D7","","",20],[12,"D8","","",20],[12,"D9","","",20],[12,"Colon","","",20],[12,"Semicolon","","",20],[12,"Less","","",20],[12,"Equals","","",20],[12,"Greater","","",20],[12,"Question","","",20],[12,"At","","",20],[12,"LeftBracket","","",20],[12,"Backslash","","",20],[12,"RightBracket","","",20],[12,"Caret","","",20],[12,"Underscore","","",20],[12,"Backquote","","",20],[12,"A","","",20],[12,"B","","",20],[12,"C","","",20],[12,"D","","",20],[12,"E","","",20],[12,"F","","",20],[12,"G","","",20],[12,"H","","",20],[12,"I","","",20],[12,"J","","",20],[12,"K","","",20],[12,"L","","",20],[12,"M","","",20],[12,"N","","",20],[12,"O","","",20],[12,"P","","",20],[12,"Q","","",20],[12,"R","","",20],[12,"S","","",20],[12,"T","","",20],[12,"U","","",20],[12,"V","","",20],[12,"W","","",20],[12,"X","","",20],[12,"Y","","",20],[12,"Z","","",20],[12,"Delete","","",20],[12,"CapsLock","","",20],[12,"F1","","",20],[12,"F2","","",20],[12,"F3","","",20],[12,"F4","","",20],[12,"F5","","",20],[12,"F6","","",20],[12,"F7","","",20],[12,"F8","","",20],[12,"F9","","",20],[12,"F10","","",20],[12,"F11","","",20],[12,"F12","","",20],[12,"PrintScreen","","",20],[12,"ScrollLock","","",20],[12,"Pause","","",20],[12,"Insert","","",20],[12,"Home","","",20],[12,"PageUp","","",20],[12,"End","","",20],[12,"PageDown","","",20],[12,"Right","","",20],[12,"Left","","",20],[12,"Down","","",20],[12,"Up","","",20],[12,"NumLockClear","","",20],[12,"NumPadDivide","","",20],[12,"NumPadMultiply","","",20],[12,"NumPadMinus","","",20],[12,"NumPadPlus","","",20],[12,"NumPadEnter","","",20],[12,"NumPad1","","",20],[12,"NumPad2","","",20],[12,"NumPad3","","",20],[12,"NumPad4","","",20],[12,"NumPad5","","",20],[12,"NumPad6","","",20],[12,"NumPad7","","",20],[12,"NumPad8","","",20],[12,"NumPad9","","",20],[12,"NumPad0","","",20],[12,"NumPadPeriod","","",20],[12,"Application","","",20],[12,"Power","","",20],[12,"NumPadEquals","","",20],[12,"F13","","",20],[12,"F14","","",20],[12,"F15","","",20],[12,"F16","","",20],[12,"F17","","",20],[12,"F18","","",20],[12,"F19","","",20],[12,"F20","","",20],[12,"F21","","",20],[12,"F22","","",20],[12,"F23","","",20],[12,"F24","","",20],[12,"Execute","","",20],[12,"Help","","",20],[12,"Menu","","",20],[12,"Select","","",20],[12,"Stop","","",20],[12,"Again","","",20],[12,"Undo","","",20],[12,"Cut","","",20],[12,"Copy","","",20],[12,"Paste","","",20],[12,"Find","","",20],[12,"Mute","","",20],[12,"VolumeUp","","",20],[12,"VolumeDown","","",20],[12,"NumPadComma","","",20],[12,"NumPadEqualsAS400","","",20],[12,"AltErase","","",20],[12,"Sysreq","","",20],[12,"Cancel","","",20],[12,"Clear","","",20],[12,"Prior","","",20],[12,"Return2","","",20],[12,"Separator","","",20],[12,"Out","","",20],[12,"Oper","","",20],[12,"ClearAgain","","",20],[12,"CrSel","","",20],[12,"ExSel","","",20],[12,"NumPad00","","",20],[12,"NumPad000","","",20],[12,"ThousandsSeparator","","",20],[12,"DecimalSeparator","","",20],[12,"CurrencyUnit","","",20],[12,"CurrencySubUnit","","",20],[12,"NumPadLeftParen","","",20],[12,"NumPadRightParen","","",20],[12,"NumPadLeftBrace","","",20],[12,"NumPadRightBrace","","",20],[12,"NumPadTab","","",20],[12,"NumPadBackspace","","",20],[12,"NumPadA","","",20],[12,"NumPadB","","",20],[12,"NumPadC","","",20],[12,"NumPadD","","",20],[12,"NumPadE","","",20],[12,"NumPadF","","",20],[12,"NumPadXor","","",20],[12,"NumPadPower","","",20],[12,"NumPadPercent","","",20],[12,"NumPadLess","","",20],[12,"NumPadGreater","","",20],[12,"NumPadAmpersand","","",20],[12,"NumPadDblAmpersand","","",20],[12,"NumPadVerticalBar","","",20],[12,"NumPadDblVerticalBar","","",20],[12,"NumPadColon","","",20],[12,"NumPadHash","","",20],[12,"NumPadSpace","","",20],[12,"NumPadAt","","",20],[12,"NumPadExclam","","",20],[12,"NumPadMemStore","","",20],[12,"NumPadMemRecall","","",20],[12,"NumPadMemClear","","",20],[12,"NumPadMemAdd","","",20],[12,"NumPadMemSubtract","","",20],[12,"NumPadMemMultiply","","",20],[12,"NumPadMemDivide","","",20],[12,"NumPadPlusMinus","","",20],[12,"NumPadCear","","",20],[12,"NumPadClearEntry","","",20],[12,"NumPadBinary","","",20],[12,"NumPadOctal","","",20],[12,"NumPadDecimal","","",20],[12,"NumPadHexadecimal","","",20],[12,"LCtrl","","",20],[12,"LShift","","",20],[12,"LAlt","","",20],[12,"LGui","","",20],[12,"RCtrl","","",20],[12,"RShift","","",20],[12,"RAlt","","",20],[12,"RGui","","",20],[12,"Mode","","",20],[12,"AudioNext","","",20],[12,"AudioPrev","","",20],[12,"AudioStop","","",20],[12,"AudioPlay","","",20],[12,"AudioMute","","",20],[12,"MediaSelect","","",20],[12,"Www","","",20],[12,"Mail","","",20],[12,"Calculator","","",20],[12,"Computer","","",20],[12,"AcSearch","","",20],[12,"AcHome","","",20],[12,"AcBack","","",20],[12,"AcForward","","",20],[12,"AcStop","","",20],[12,"AcRefresh","","",20],[12,"AcBookmarks","","",20],[12,"BrightnessDown","","",20],[12,"BrightnessUp","","",20],[12,"DisplaySwitch","","",20],[12,"KbdIllumToggle","","",20],[12,"KbdIllumDown","","",20],[12,"KbdIllumUp","","",20],[12,"Eject","","",20],[12,"Sleep","","",20],[10,"fmt","","",20],[10,"eq","","",20],[10,"ne","","",20],[10,"clone","","",20],[10,"code","","Returns an id of the key",20],[10,"hash","","",20],[10,"lt","","",20],[10,"cmp","","",20],[10,"to_i64","","",20],[10,"to_u64","","",20],[10,"to_int","","",20],[10,"from_u64","","",20],[10,"from_i64","","",20],[10,"from_int","","",20],[0,"event","piston","Event data."],[2,"Event","piston::event","Contains the information associated with an event."],[12,"NoEvent","","No event occured.",21],[12,"KeyReleased","","A key was released.",21],[12,"KeyPressed","","A key was pressed.",21],[12,"MouseButtonPressed","","A mouse button was pressed.",21],[12,"MouseButtonReleased","","A mouse button was released.",21],[12,"MouseMoved","","The mouse moved.",21],[10,"fmt","","",21],[10,"lt","","",21],[10,"le","","",21],[10,"gt","","",21],[10,"ge","","",21],[10,"eq","","",21],[10,"ne","","",21],[10,"clone","","",21],[0,"mouse","piston","Back-end agnostic mouse buttons."],[2,"Button","piston::mouse","Represent a mouse button."],[12,"Unknown","","Unknown mouse button.",22],[12,"Left","","Left mouse button.",22],[12,"Right","","Right mouse button.",22],[12,"Middle","","Middle mouse button.",22],[12,"X1","","Extra mouse button number 1.",22],[12,"X2","","Extra mouse button number 2.",22],[12,"Button6","","Mouse button number 6.",22],[12,"Button7","","Mouse button number 7.",22],[12,"Button8","","Mouse button number 8.",22],[10,"fmt","","",22],[10,"hash","","",22],[10,"lt","","",22],[10,"le","","",22],[10,"gt","","",22],[10,"ge","","",22],[10,"cmp","","",22],[10,"eq","","",22],[10,"ne","","",22],[10,"clone","","",22],[6,"Game","piston","Implemented by game applications."],[10,"render","","Render graphics.",23],[10,"update","","Update the physical state of the game.",23],[10,"load","","Perform tasks for loading before showing anything.",23],[10,"key_press","","User pressed a key.",23],[10,"key_release","","User released a key.",23],[10,"mouse_press","","Pressed a mouse button.",23],[10,"mouse_release","","Released a mouse button.",23],[10,"mouse_move","","Moved mouse cursor.",23],[10,"mouse_relative_move","","Moved mouse relative, not bounded by cursor.",23],[10,"event","","Handles a game event.",23],[10,"run","","Executes a game loop.",23],[6,"Music","","Implemented by all the music."],[6,"Sound","","Implemented by all the sound."],[6,"AudioBackEnd","","Implemented by all audio back-ends."],[9,"play_sound","","Play sound.",24],[9,"play_music","","Play music.",24]],"paths":[[1,"GameIterator"],[1,"GameIteratorSettings"],[1,"RenderArgs"],[1,"UpdateArgs"],[1,"KeyPressArgs"],[1,"KeyReleaseArgs"],[1,"MousePressArgs"],[1,"MouseReleaseArgs"],[1,"MouseMoveArgs"],[1,"MouseRelativeMoveArgs"],[1,"GameWindowSDL2"],[1,"GameWindowGLFW"],[1,"GameWindowSettings"],[1,"Gl"],[1,"AssetStore"],[1,"Texture"],[1,"MusicSDL2"],[1,"SoundSDL2"],[2,"GameEvent"],[6,"GameWindow"],[2,"Key"],[2,"Event"],[2,"Button"],[6,"Game"],[6,"AudioBackEnd"]]};
initSearch(searchIndex);
