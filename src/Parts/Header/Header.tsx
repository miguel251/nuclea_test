import React, { FC } from "react"
import { Grid } from "@mui/material";
import { HeaderType } from "./Header.model";
import useStore from "../../store";
import Icon from "../../components/Icon";
import _ from 'lodash';
import './style.css';

const Header:FC<HeaderType> = ({ title }) => {
    const { Categories, activeCategory } = useStore();
    const category = _.find(Categories, { 'active': true }); 

    return (
        <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
            <Grid item xs={12}>
                <h1>{title}</h1>
                {
                    category && <h5>{`Elige nuestros ${category.type === 'drink' ? category.name + ' refrescantes' : 'deliciosos ' + category.name}`}</h5>
                }
            </Grid>
            {
                Categories.map((category) => {
                    return (<Grid item xs={3}>
                        <div className={`icon-container ${category.active ? 'icon-active' : ''}`}>
                            <Icon name={category.icon} size={25}/>
                            <p>{category.name}</p>
                        </div>
                    </Grid>)
                })
            }
        </Grid>
    )
};

export default Header;