import "../assets/nav.css";
export function PanelLeft(props) {
    return (
        <nav class="sidebar-navigation">
            <script src="https://kit.fontawesome.com/e6313bd8bc.js" crossorigin="anonymous"></script>
            <ul>
                <li class="active">
                    <i class="fa fa-share-alt"></i>
                    <span class="tooltip">Connections</span>
                </li>
                <li>
                    <i class="fa fa-hdd-o"></i>
                    <span class="tooltip">Devices</span>
                </li>
                <li>
                    <i class="fa fa-newspaper-o"></i>
                    <span class="tooltip">Contacts</span>
                </li>
                <li>
                    <i class="fa fa-print"></i>
                    <span class="tooltip">Fax</span>
                </li>
                <li>
                    <i class="fa fa-sliders"></i>
                    <span class="tooltip">Settings</span>
                </li>
            </ul>
        </nav>
    )
}
