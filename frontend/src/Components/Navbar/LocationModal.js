import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const regions = [
    {region: "United Arab Emirates", value: "ae"},
    {region: "Argentina", value: "ar"},
    {region: "Austria", value: "at"},
    {region: "Australia", value: "au"},
    {region: "Belgium", value: "be"},
    {region: "Bulgaria", value: "bg"},
    {region: "Brazil", value: "br"},
    {region: "Canada", value: "ca"},
    {region: "Switzerland", value: "ch"},
    {region: "China", value: "cn"},
    {region: "Colombia", value: "co"},
    {region: "Cuba", value: "cu"},
    {region: "Czechia", value: "cz"},
    {region: "Germany", value: "de"},
    {region: "Egypt", value: "eg"},
    {region: "France", value: "fr"},
    {region: "United Kingdom", value: "gb"},
    {region: "Greece", value: "gr"},
    {region: "Hong Kong", value: "hk"},
    {region: "Hungary", value: "hu"},
    {region: "Indonesia", value: "id"},
    {region: "Ireland", value: "ie"},
    {region: "Israel", value: "il"},
    {region: "India", value: "in"},
    {region: "Italy", value: "it"},
    {region: "Japan", value: "jp"},
    {region: "South Korea", value: "kr"},
    {region: "Lithuania", value: "lt"},
    {region: "Latvia", value: "lv"},
    {region: "Morocco", value: "ma"},
    {region: "Mexico", value: "mx"},
    {region: "Malaysia", value: "my"},
    {region: "Nigeria", value: "ng"},
    {region: "Netherlands", value: "nl"},
    {region: "Norway", value: "no"},
    {region: "New Zealand", value: "nz"},
    {region: "Philippines", value: "ph"},
    {region: "Poland", value: "pl"},
    {region: "Portugal", value: "pt"},
    {region: "Romania", value: "ro"},
    {region: "Serbia", value: "rs"},
    {region: "Russia", value: "ru"},
    {region: "Sweden", value: "se"},
    {region: "Singapore", value: "sg"},
    {region: "Slovenia", value: "si"},
    {region: "Slovakia", value: "sk"},
    {region: "Thailand", value: "th"},
    {region: "Turkey", value: "tr"},
    {region: "Taiwan", value: "tw"},
    {region: "Ukraine", value: "ua"},
    {region: "United States", value: "us"},
    {region: "Venezuela", value: "ve"},
    {region: "South Africa", value: "za"},
    

];

export default function LocationModal(props) {
    const [open, setOpen] = useState(props.open);
    const [regionName, setRegionName] = useState(null);
    const [region, setRegion] = useState(null);

    const handleClose = () => {
        setOpen(false);
        props.onClose();
    }
    const handleChange = (e, region) => {
        setRegionName(region.region);
        setRegion(region.value);
    }

    const handleSubmit = () => {
        localStorage.setItem("region", region);
        localStorage.setItem("regionName", regionName);
        window.location = "/";
    }

    return(
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="location-change">Change Region</DialogTitle>
            <DialogContent>
                <Autocomplete
                    onChange={(e, region) => handleChange(e, region)}
                    id="region-selector"
                    options={regions}
                    getOptionLabel={(option) => option.region}
                    style={{ width: 300}}
                    renderInput={(params) => <TextField {...params} label="Region" variant="outlined" autoFocus />}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}